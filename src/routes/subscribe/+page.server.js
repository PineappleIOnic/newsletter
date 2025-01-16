import { createSubscription } from '$lib/server/appwrite';
import { fail } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (typeof email !== 'string') {
			return fail(400, { email, invalid: true });
		}

		if (!email.includes('@')) {
			return fail(400, { email, invalid: true });
		}

		const user = await createSubscription(email);

		return {
			status: 201,
			body: user
		};
	}
};
