import {
    Account,
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
                user = (await auth.list([Query.equal("email", [email])])).users[0];
            } else {
                console.error("Error creating user", err);
                return error(500, "Error creating user");
            }
        } else {
            console.error("Error creating user", err);
            return error(500, "Error creating user");
        }
    }

    const template = fs.readFileSync(
        path.resolve(__dirname, "./templates/confirm.ejs"),
        "utf8",
    );

    const code = await createVerificationCode(user.$id);

    const html = /** @type {string} */  (ejs.render(template, {
        newsletter: config.newsletterName,
        newsletterIcon: newsletterIcon,
        author: config.creator,
        socials: config.socials,
        redirectUrl: `${PUBLIC_APP_DOMAIN}/confirm?code=${code}`,
    }, {
        async: false
    }));

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

    // Check for existing codes:
    try {
        let existingCodes = await database.listDocuments(
            "newsletter",
            "verification",
            [Query.equal("userId", userId)],
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
        let document = await database.createDocument(
            "newsletter",
            "verification",
            ID.unique(),
            {
                userId
            },
        );

        return document.$id;
    } catch (err) {
        console.error("Error creating verification code", err);
        return error(500, "Error creating verification code");
    }
}

/**
 * @param {string} code 
 * @returns {Promise<boolean>}
 */
export async function verifyCode(code) {
    const client = getAppwriteClient();
    const database = new Databases(client);
    const users = new Users(client);

    try {
        let verifyDoc = await database.getDocument(
            "newsletter",
            "verification",
            code
        );

        await users.updateEmailVerification(verifyDoc.userId, true);

        await database.deleteDocument(
            "newsletter",
            "verification",
            verifyDoc.$id
        )

        return true;
    } catch (err) {
        if (err instanceof AppwriteException) {
            if (err.code === 404) {
                return false;
            } else {
                console.error("Error verifying code", err);
                return error(500, "Error verifying code");
            }
        }
    }

    return false;
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

    await database.createStringAttribute(
        databaseId,
        collection.$id,
        "userId",
        256,
        true,
    );
    
    // Await for the attributes to be created
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await database.createIndex(
        databaseId,
        collection.$id,
        "userId",
        IndexType.Unique,
        ["userId"],
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
