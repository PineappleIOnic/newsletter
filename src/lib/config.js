/**
 * Master Configuration File
 * Change this to customise your newsletter
 */
import { PUBLIC_APP_DOMAIN } from '$env/static/public';
import { createAppwriteBucketURL } from './appwrite-public.js';

/** @type {string} */
export const newsletterName = 'Dev Newsletter';

/** @type {string} */
export const newsletterIcon = PUBLIC_APP_DOMAIN + '/favicon.png';

/**
 * @typedef {Object} Creator
 * @property {string} name - Creator's name.
 * @property {string} avatar - URL of the creator's avatar.
 * @property {string} position - Creator's position or title.
 */

/** @type {Creator} */
export const creator = {
	name: "Walter o'Brien",
	avatar: createAppwriteBucketURL('walter'),
	position: 'Founder, Dev Newsletter'
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
		name: 'Github',
		icon: 'github',
		emailImage: PUBLIC_APP_DOMAIN + '/icons/email/github.png',
		url: 'https://github.com/appwrite/'
	},
	{
		name: 'Youtube',
		icon: 'youtube',
		emailImage: PUBLIC_APP_DOMAIN + '/icons/email/youtube.png',
		url: 'https://youtube.com/appwrite'
	},
	{
		name: 'Discord',
		icon: 'discord',
		emailImage: PUBLIC_APP_DOMAIN + '/icons/email/discord.png',
		url: 'https://appwrite.io/discord'
	},
	{
		name: 'X',
		icon: 'x',
		emailImage: PUBLIC_APP_DOMAIN + '/icons/email/x.png',
		url: 'https://x.com/appwrite'
	}
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
	socials
};
