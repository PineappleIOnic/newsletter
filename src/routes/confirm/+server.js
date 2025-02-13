import { verifyCode } from '$lib/server/appwrite';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const key = url.searchParams.get('code');

	if (!key) {
		return error(400, 'Missing userId or code');
	}

	const result = verifyCode(key);

	if (!result) {
		return error(400, 'Invalid code');
	}

	return redirect(301, '/confirmed');
}
