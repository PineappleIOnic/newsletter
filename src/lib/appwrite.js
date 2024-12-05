import {
    AppwriteException,
    Client,
    Databases,
    ID,
    IndexType,
    Messaging,
    Query,
    Users,
} from "node-appwrite";
import { APPWRITE_API_KEY } from "$env/static/private";
import fs from "fs";
import { config, newsletterIcon } from "$lib/config.js";
import ejs from "ejs";
import { error } from "@sveltejs/kit";
import path from "path";
import { fileURLToPath } from "url";
import {
    PUBLIC_APP_DOMAIN,
    PUBLIC_APPWRITE_ENDPOINT,
    PUBLIC_APPWRITE_PROJECT_ID,
} from "$env/static/public";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getAppwriteClient() {
    let client = new Client();

    client
        .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
        .setProject(PUBLIC_APPWRITE_PROJECT_ID)
        .setKey(APPWRITE_API_KEY);

    return client;
}

/**
 * @param {string} email
 */
export async function createSubscription(email) {
    const client = getAppwriteClient();
    const auth = new Users(client);
    const messaging = new Messaging(client);

    let user;

    try {
        user = await auth.create(ID.unique(), email);
    } catch (err) {
        if (err instanceof AppwriteException) {
            if (err.code === 409) {
                user =
                    (await auth.list([Query.equal("email", [email])])).users[0];
            } else {
                console.error("Error creating user", err);
                return error(500, "Error creating user");
            }
        }
        console.error("Error creating user", err);
        return error(500, "Error creating user");
    }

    const template = fs.readFileSync(
        path.resolve(__dirname, "./templates/confirm.ejs"),
        "utf8",
    );

    const code = await createVerificationCode(user.$id);

    const html = ejs.render(template, {
        newsletter: config.newsletterName,
        newsletterIcon: newsletterIcon,
        author: config.creator,
        socials: config.socials,
        redirectUrl: `${PUBLIC_APP_DOMAIN}/confirm?userId=${user.$id}&code=${code}`,
    });

    try {
        console.log("Sending email to", email);
        await messaging.createEmail(
            ID.unique(),
            "Welcome to " + config.newsletterName + "!",
            html,
            [],
            [user.$id],
            [],
            [],
            [],
            [],
            false,
            true,
        );
    } catch (e) {
        console.error("Error sending email", e);
    }
}

/**
 * @param {string} userId
 * @returns {Promise<string>}
 */
export async function createVerificationCode(userId) {
    const client = getAppwriteClient();
    const database = new Databases(client);

    const code = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Check for existing codes:
    try {
        let existingCodes = await database.listDocuments(
            "newsletter",
            "verification",
            [Query.equal("user", userId)],
        );

        if (existingCodes.documents.length > 0) {
            await database.deleteDocument(
                "newsletter",
                "verification",
                existingCodes.documents[0].$id,
            );
        }
    } catch (err) {
        if (err instanceof AppwriteException) {
            if (err.type === "database_not_found") {
                console.log("Creating newsletter database");
                await database.create("newsletter", "Newsletter");
                await createVerificationCollection("newsletter");
            } else if (err.type === "collection_not_found") {
                console.log("Creating newsletter collection");
                await createVerificationCollection("newsletter");
            } else {
                console.error("Error listing verification codes", err);
                return error(500, "Error listing verification codes");
            }
        }
    }

    try {
        await database.createDocument(
            "newsletter",
            "verification",
            ID.unique(),
            {
                code: code,
                user: userId,
            },
        );
    } catch (err) {
        console.error("Error creating verification code", err);
        return error(500, "Error creating verification code");
    }

    return code;
}

/**
 * @param {string} databaseId
 */
async function createVerificationCollection(databaseId) {
    const client = getAppwriteClient();
    const database = new Databases(client);

    let collection = await database.createCollection(
        databaseId,
        "verification",
        "Email Verification",
    );

    database.createStringAttribute(
        databaseId,
        collection.$id,
        "code",
        256,
        true,
    );
    database.createStringAttribute(
        databaseId,
        collection.$id,
        "user",
        256,
        true,
    );
    database.createIndex(
        databaseId,
        collection.$id,
        "userId",
        IndexType.Unique,
        ["user"],
    );

    return collection;
}

/**
 * Generate a URL for accessing a file in an Appwrite bucket.
 * @param {string} id - The ID of the file in the bucket.
 * @returns {string} The complete URL to access the file.
 */
export function createAppwriteBucketURL(id) {
    return `${PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/cdn/files/${id}/view?project=${PUBLIC_APPWRITE_PROJECT_ID}`;
}
