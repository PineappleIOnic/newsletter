<script>
	import Subscriber from './Subscriber.svelte';
</script>

<section class="flex w-full justify-center border-b-2 border-dashed border-neutral-800">
	<div
		class="flex w-5/6 flex-col items-center border-x-2 border-dashed border-neutral-800 px-5 py-20 sm:px-20 md:w-3/4"
	>
		<div class="max-w-3xl text-center">
			<p class="text-5xl font-medium text-neutral-500 md:text-6xl">The weekly newsletter</p>
			<p class="text-neutral text-5xl font-medium md:text-6xl">for developers</p>
			<p class="my-5 font-light text-neutral-secondary">
				A sleek template designed for newsletters with a responsive layout and modern design to
				promote your content.
			</p>
		</div>
		<Subscriber />
	</div>
</section>
