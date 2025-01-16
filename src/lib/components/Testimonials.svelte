<script>
	import kenway from '$lib/assets/kenway.jpg';
	import walter from '$lib/assets/walter.png';

	/**
	 * @typedef {Object} Testimonial
	 * @property {string} name - Name of the person providing the testimonial.
	 * @property {string} handle - Handle or username.
	 * @property {string} avatar - URL of the person's avatar.
	 * @property {string} quote - Testimonial quote.
	 */

	/** @type {Testimonial[]} */
	const testimonials = [
		{
			name: "Walter o'Brien",
			handle: '@walterobrien',
			avatar: walter,
			quote:
				'This newsletter is my go-to source for insights. Every issue is packed with value, and I always come away inspired and informed!'
		},
		{
			name: 'Edward Kenway',
			handle: '@e.kenway',
			avatar: kenway,
			quote:
				'I look forward to this newsletter every week. It’s concise, engaging, and always provides actionable takeaways that I can apply immediately.'
		}
	];
</script>

<section class="flex w-full justify-center">
	<div
		class="flex w-5/6 flex-col items-center border-x-2 border-dashed border-neutral-800 py-20 md:w-3/4"
	>
		<p class="pb-20 pl-4 text-4xl font-normal">What developers say</p>

		<div
			class="flex w-full flex-wrap border-y-2 border-dashed border-neutral-800 max-xl:divide-y-2 md:flex-nowrap xl:divide-x-2"
		>
			{#each testimonials as testimonial}
				<div class="min-w-full flex-grow border-dashed border-neutral-800 p-5 md:min-w-80">
					<div class="flex gap-4 pb-5 font-light">
						<img
							src={testimonial.avatar}
							alt={testimonial.name}
							class="h-12 w-12 rounded-full object-cover"
						/>
						<div class="w-full pl-3 text-neutral-secondary">
							<p class="text-[16px] font-medium leading-[22px] tracking-[-0.072px] text-gray-400">
								{testimonial.name}
							</p>
							<p class="text-[16px] font-normal leading-[22px] tracking-[-0.072px] text-gray-400">
								{testimonial.handle}
							</p>
						</div>
					</div>

					<p class="pr-5 text-[16px] font-normal leading-[22px] tracking-[-0.072px] text-gray-300">
						{testimonial.quote}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
