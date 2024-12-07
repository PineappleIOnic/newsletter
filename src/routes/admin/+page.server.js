// src/routes/admin/+page.server.ts
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  if (!locals.user) {
    redirect(302, '/auth');
  }

  if (locals.user.labels.indexOf('admin') === -1) {
    error(403, 'Forbidden');
  }

  return {
    user: locals.user
  };
};