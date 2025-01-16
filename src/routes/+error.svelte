<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { newsletterName } from '$lib/config';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>{newsletterName} | {$page.error ? $page.error.message : 'Internal Error'}</title>
</svelte:head>

<Header />
<div
	class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center"
>
	<p class="font-light text-neutral-secondary">{$page.status}</p>
	{#if $page.error}
		{#if $page.status === 404}
			<p class="my-5 mt-0 max-w-lg pb-5 text-4xl font-light">
				Sorry, we can't find the page you're looking for.
			</p>

			<a href="/" class="rounded-lg bg-white p-2 text-black">Go to home</a>
		{:else if $page.status === 403}
			<p class="my-5 mt-0 max-w-lg pb-5 text-4xl font-light">
				Sorry, you don't have access to this page.
			</p>

			<a href="/logout" class="rounded-lg bg-white p-2 text-black">Sign out</a>
		{:else}
			<p class="my-5 pb-5 text-4xl font-light">Internal Error</p>
		{/if}
	{/if}
</div>
