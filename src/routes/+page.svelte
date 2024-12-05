<script>
    import Cta from "$lib/components/CTA.svelte";
	import Hero from "$lib/components/Hero.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
	import Topics from "$lib/components/Topics.svelte";
    import { newsletterName } from "$lib/config";
</script>

<svelte:head>
	<title>{ newsletterName }</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<Topics />
<Testimonials />
<Cta />