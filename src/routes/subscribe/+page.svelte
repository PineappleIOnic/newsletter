<script>
    import { newsletterName } from "$lib/config";
</script>

<svelte:head>
    <title>Thank you for subscrbing to { newsletterName }!</title>
</svelte:head>

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <p class="text-neutral-500 text-6xl font-medium">Thanks for subscribing to</p>
    <p class="text-neutral text-6xl font-medium">{ newsletterName }</p>
    <p class="font-light text-neutral-secondary my-5 pb-5">You will recieve an email to confirm your subscription shortly</p>

    <a href="/" class="rounded-xl font-s p-3 bg-white text-black">Return to homepage</a>
</div>