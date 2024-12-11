<script>
    import { newsletterName } from "$lib/config";
    import Header from "../Header.svelte";
</script>

<svelte:head>
    <title>Email sent for { newsletterName }</title>
</svelte:head>

<Header />
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <p class="text-neutral text-6xl font-medium">Email Sent!</p>
    <p class="font-light text-neutral-secondary my-5 pb-5">You will recieve an email to confirm your subscription shortly</p>

    <a href="/" class="rounded-xl font-s p-3 bg-white text-black">Return to homepage</a>
</div>