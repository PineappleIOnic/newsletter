<script>
	import '../app.css';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app relative min-h-screen">
	<Header />

	<main class="pb-20">
		{@render children()}
	</main>

	<Footer />
</div>