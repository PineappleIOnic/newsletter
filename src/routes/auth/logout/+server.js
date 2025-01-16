import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url, cookies }) {
	cookies.set('sessionId', '', { path: '/', maxAge: 0 });

	return redirect(301, '/');
}
