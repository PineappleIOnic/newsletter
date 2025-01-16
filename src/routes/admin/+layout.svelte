<script>
	import Header from '$lib/components/admin/Header.svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="flex min-h-full flex-col">
	<Header />

	{@render children()}
</div>
