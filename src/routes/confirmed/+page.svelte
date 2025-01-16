<script>
	import { newsletterName } from '$lib/config';
	import Header from '../Header.svelte';
</script>

<svelte:head>
	<title>Your subcribed to {newsletterName}!</title>
</svelte:head>

<Header />
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
	<p class="text-6xl font-medium text-neutral-500">Thanks for subscribing to</p>
	<p class="text-neutral text-6xl font-medium">{newsletterName}</p>
	<p class="my-5 pb-5 font-light text-neutral-secondary">
		You'll now receive updates, tips, and exclusive content straight to your inbox.
	</p>

	<a href="/" class="font-s rounded-xl bg-white p-3 text-black">Return to homepage</a>
</div>
