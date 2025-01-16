<script>
	import { CircleStack, CubeTransparent, LockClosed, Sparkles } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	/**
	 * @typedef {import("@steeze-ui/heroicons").IconSource} IconSource
	 */

	/**
	 * @typedef {Object} Topic
	 * @property {string} title - Title of the topic.
	 * @property {IconSource} icon - Icon component for the topic.
	 * @property {string} description - Description of the topic.
	 */

	/** @type {Topic[]} */
	export const topics = [
		{
			title: 'Security',
			icon: LockClosed,
			description:
				'Protect your data with advanced encryption. Built to ensure privacy and safeguard your information.'
		},
		{
			title: 'Artificial Intelligence',
			icon: Sparkles,
			description:
				'Leverage AI to enhance decision-making. Smarter solutions for complex challenges at scale.'
		},
		{
			title: 'Databases',
			icon: CircleStack,
			description:
				'Efficiently manage and query your data. Built for speed, scalability, and reliability.'
		},
		{
			title: 'Frameworks',
			icon: CubeTransparent,
			description:
				'Streamline development with robust frameworks. Faster builds and seamless integration.'
		}
	];
</script>

<section class="flex w-full justify-center">
	<div
		class="flex w-5/6 flex-col items-center border-x-2 border-dashed border-neutral-800 pt-10 md:w-3/4"
	>
		<div class="max-w-3xl pb-20 text-center">
			<p class="pb-5 font-sans text-3xl">New topics every week</p>
			<p class="font-light text-neutral-secondary">
				Stay updated with fresh insights weekly. Discover new ideas, trends, and tips tailored just
				for you.
			</p>
		</div>

		<div
			class="flex w-full flex-wrap border-y-2 border-dashed border-neutral-800 max-xl:divide-y-2 xl:flex-nowrap xl:divide-x-2"
		>
			{#each topics as topic}
				<div class="flex flex-col gap-4 border-dashed border-neutral-800 p-5 md:min-w-64">
					<Icon src={topic.icon} class="mb-5 size-7 text-white" />

					<div class="flex flex-col gap-1">
						<p class="text-[16px] font-medium leading-[22px] tracking-[-0.072px] text-gray-200">
							{topic.title}
						</p>
						<p class="pr-5 font-light text-neutral-secondary">{topic.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
