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
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
    <h1 class="text-9xl">{$page.status}</h1>
    {#if $page.error}
        <p class="font-light text-neutral-secondary my-5 pb-5">{$page.error.message}</p>
    {/if}
</div>