/**
 * Master Configuration File
 * Change this to customise your newsletter
 */
import { createAppwriteBucketURL } from "./appwrite-public.js";

/** @type {string} */
export const newsletterName = "Dev Newsletter";

/** @type {string} */
export const newsletterIcon = createAppwriteBucketURL("67511a5400215d0378e4");

/**
 * @typedef {Object} Creator
 * @property {string} name - Creator's name.
 * @property {string} avatar - URL of the creator's avatar.
 * @property {string} position - Creator's position or title.
 */

/** @type {Creator} */
export const creator = {
    name: "Walter o'Brien",
    avatar: createAppwriteBucketURL("walter"),
    position: "Founder, Dev Newsletter",
};

/**
 * @typedef {Object} Social
 * @property {string} name - Name of the social platform.
 * @property {string} icon - Icon name or identifier.
 * @property {string} emailImage - URL of the email image.
 * @property {string} url - URL of the social platform.
 */

/** @type {Social[]} */
export const socials = [
    {
        name: "Github",
        icon: "github",
        emailImage: createAppwriteBucketURL("67511a630015c2451d13"),
        url: "https://github.com/appwrite/",
    },
    {
        name: "Youtube",
        icon: "youtube",
        emailImage: createAppwriteBucketURL("youtube"),
        url: "https://youtube.com/appwrite",
    },
    {
        name: "Discord",
        icon: "discord",
        emailImage: createAppwriteBucketURL("67511a69003a6f4a09a9"),
        url: "https://appwrite.io/discord",
    },
    {
        name: "X",
        icon: "x",
        emailImage: createAppwriteBucketURL("67511a5e002962f2232c"),
        url: "https://x.com/appwrite",
    },
];

/**
 * @typedef {Object} Config
 * @property {string} newsletterName - Name of the newsletter.
 * @property {Creator} creator - Creator information.
 * @property {Social[]} socials - List of social links.
 */

/** @type {Config} */
export const config = {
    newsletterName,
    creator,
    socials,
};