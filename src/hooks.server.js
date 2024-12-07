import { getAccount } from '$lib/server/appwrite';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    let sessionId = event.cookies.get('sessionId');

    if (sessionId !== undefined) {
        event.locals.user = await getAccount(sessionId);
    }

	return resolve(event);
}