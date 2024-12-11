<script>
    import Header from "$lib/components/admin/Header.svelte";

    /** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>
<div class="min-h-full flex flex-col">
    <Header />

    {@render children()}
</div>