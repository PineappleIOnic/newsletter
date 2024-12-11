<script>
    import '../app.css';
	import { page } from '$app/stores';
    import { newsletterName } from '$lib/config';
    import Header from './Header.svelte';
</script>

<svelte:head>
    <title>{ newsletterName } | {$page.error ? $page.error.message : 'Internal Error'}</title>
</svelte:head>

<Header />
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center text-center">
    <p class="font-light text-neutral-secondary">{$page.status}</p>
    {#if $page.error}
        {#if $page.status === 404}
            <p class="text-4xl my-5 pb-5 font-light max-w-lg mt-0">Sorry, we can't find the page you're looking for.</p>

            <a href="/" class="rounded-lg p-2 bg-white text-black">Go to home</a>
        {:else if $page.status === 403}
            <p class="text-4xl my-5 pb-5 font-light max-w-lg mt-0">Sorry, you don't have access to this page.</p>

            <a href="/logout" class="rounded-lg p-2 bg-white text-black">Sign out</a>
        {:else}
            <p class="text-4xl my-5 pb-5 font-light">Internal Error</p>
        {/if}
    {/if}
</div>