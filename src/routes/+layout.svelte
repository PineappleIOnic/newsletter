<script>
	import '../app.css';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>