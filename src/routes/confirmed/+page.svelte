<script>
    import { newsletterName } from "$lib/config";
    import Header from "../Header.svelte";
</script>

<svelte:head>
    <title>Your subcribed to { newsletterName }!</title>
</svelte:head>

<Header />
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <p class="text-neutral-500 text-6xl font-medium">Thanks for subscribing to</p>
    <p class="text-neutral text-6xl font-medium">{ newsletterName }</p>
    <p class="font-light text-neutral-secondary my-5 pb-5">You'll now receive updates, tips, and exclusive content straight to your inbox.</p>

    <a href="/" class="rounded-xl font-s p-3 bg-white text-black">Return to homepage</a>
</div>