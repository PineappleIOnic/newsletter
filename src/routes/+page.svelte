<script>
	import Cta from '$lib/components/CTA.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Topics from '$lib/components/Topics.svelte';
	import { newsletterName } from '$lib/config';
	import Header from './Header.svelte';
	import { PUBLIC_APP_DOMAIN } from '$env/static/public';

	const title = newsletterName;
	const description =
		'A clean and responsive template designed to capture newsletter leads, with an optimized layout for easy integration into your existing workflows.';
	const ogImage = `${PUBLIC_APP_DOMAIN}/newsletter-og.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<!-- Description -->
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<!-- Image -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<Header />
<Hero />
<Topics />
<Testimonials />
<Cta />
