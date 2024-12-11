import {sequence} from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import { getAccount } from '$lib/server/appwrite';

Sentry.init({
    dsn: "https://6bc7e232b9fc381f02e97e512a760888@o303677.ingest.us.sentry.io/4508448246792192",
    tracesSampleRate: 1
})

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(
 Sentry.sentryHandle(),
 async function _handle({ event, resolve }) {
     let sessionId = event.cookies.get('sessionId');

     if (sessionId !== undefined) {
         event.locals.user = await getAccount(sessionId);
     }

     return resolve(event);
 }
);