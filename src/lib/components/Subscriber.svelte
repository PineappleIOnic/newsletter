<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    let processing = false;
    let email = '';

    onMount(() => {
        console.log('Subscriber component mounted');
    });
</script>

<div class="max-w-sm w-full border-2 border-neutral-700 rounded-xl p-1 bg-neutral-800 mt-5">
    <form class="flex w-full" method="POST" action="/subscribe">
        <input name="email" type="email" class="bg-transparent grow pl-3" placeholder="Enter your email" />
        <button class="rounded-xl font-s p-3 bg-white text-black">
            {#if processing}
                <span transition:fade>Processing...</span>
            {:else}
                <span transition:fade>Sign up</span>
            {/if}
        </button>
	</form>
</div>