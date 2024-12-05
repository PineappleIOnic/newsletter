import path from 'path';
import { fileURLToPath } from 'url';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * Generate a URL for accessing a file in an Appwrite bucket.
 * @param {string} id - The ID of the file in the bucket.
 * @returns {string} The complete URL to access the file.
 */
export function createAppwriteBucketURL(id) {
    return `${PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/cdn/files/${id}/view?project=${PUBLIC_APPWRITE_PROJECT_ID}`;
}
