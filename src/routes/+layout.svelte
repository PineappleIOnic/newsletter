<script>
	import '../app.css';
	import Footer from './Footer.svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="app relative min-h-screen">
	<main class="pb-20">
		{@render children()}
	</main>

	<Footer />
</div>
