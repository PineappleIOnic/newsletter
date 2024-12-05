<script>
    import '../app.css';
	import { page } from '$app/stores';
    import { newsletterName } from '$lib/config';
</script>

<svelte:head>
    <title>{ newsletterName } | Internal Error</title>
</svelte:head>

<div class="h-32 w-full text-center">
    <h1 class="text-3xl">{$page.status}</h1>
    <h1 class="text-3xl">{$page.error.message}</h1>
</div>