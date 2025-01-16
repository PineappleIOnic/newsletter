import { createAccount, createSession } from '$lib/server/appwrite';
import { fail, redirect } from '@sveltejs/kit';
import { AppwriteException } from 'node-appwrite';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (typeof email !== 'string') {
			return fail(400, { email, incorrect: true });
		}

		if (!email.includes('@')) {
			return fail(400, { email, incorrect: true });
		}

		if (!password) {
			return fail(400, { missing: true });
		}

		if (typeof password !== 'string') {
			return fail(400, { incorrect: true });
		}

		try {
			const session = await createSession(email, password);

			cookies.set('sessionId', session.secret, { path: '/' });

			if (url.searchParams.has('redirect')) {
				redirect(303, url.searchParams.get('redirect') ?? '');
			} else {
				redirect(303, '/admin');
			}
		} catch (err) {
			if (err instanceof AppwriteException) {
				if (err.code >= 400 && err.code <= 499) {
					return fail(401, { email, incorrect: true });
				}
			}

			throw err;
		}
	},
	register: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');
		const confirm = data.get('confirm');

		if (!name) {
			return fail(400, { name, missing: true });
		}

		if (typeof name !== 'string') {
			return fail(400, { name, invalid: true });
		}

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (typeof email !== 'string' || !email.includes('@')) {
			return fail(400, { email, invalid: true });
		}

		if (!password || !confirm || typeof password !== 'string' || typeof confirm !== 'string') {
			return fail(400, { missing: true });
		}

		if (password !== confirm) {
			return fail(400, { mismatch: true });
		}

		await createAccount(name, email, password);

		return { email, success: true };
	}
};

export const load = async ({ locals }) => {
	if (locals.user && locals.user.labels.indexOf('admin') === -1) {
		redirect(302, '/admin');
	}
};
