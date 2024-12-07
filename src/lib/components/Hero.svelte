<script>
    import Subscriber from "./Subscriber.svelte";
</script>

<section class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
	<div class="flex py-20 px-5 sm:px-20 w-5/6 md:w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
		<div class="text-center max-w-3xl">
			<p class="text-neutral-500 text-5xl md:text-6xl font-medium">The weekly newsletter</p>
			<p class="text-neutral text-5xl md:text-6xl font-medium">for developers</p>
			<p class="font-light text-neutral-secondary my-5">A sleek template designed for newsletters with a responsive layout and modern design to promote your content.</p>
		</div>
		<Subscriber />
	</div>
</section>