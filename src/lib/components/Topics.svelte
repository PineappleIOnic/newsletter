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
			title: "Security",
			icon: LockClosed,
			description:
				"Protect your data with advanced encryption. Built to ensure privacy and safeguard your information.",
		},
		{
			title: "Artificial Intelligence",
			icon: Sparkles,
			description:
				"Leverage AI to enhance decision-making. Smarter solutions for complex challenges at scale.",
		},
		{
			title: "Databases",
			icon: CircleStack,
			description:
				"Efficiently manage and query your data. Built for speed, scalability, and reliability.",
		},
		{
			title: "Frameworks",
			icon: CubeTransparent,
			description:
				"Streamline development with robust frameworks. Faster builds and seamless integration.",
		},
	];
</script>

<section class="flex justify-center w-full">
	<div class="flex py-20 w-5/6 md:w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
        <div class="text-center max-w-3xl pb-16">
            <p class="text-3xl pb-5">New topics every week</p>
            <p class="text-neutral-secondary font-light">Stay updated with fresh insights weekly. Discover new ideas, trends, and tips tailored just for you.</p>
        </div>

		<div class="flex flex-wrap xl:flex-nowrap w-full border-dashed border-y-2 xl:divide-x-2 max-xl:divide-y-2 border-neutral-800">
			{#each topics as topic}
				<div class="flex-grow p-5 border-dashed border-neutral-800 md:min-w-64">
					<Icon src="{topic.icon}" class="text-white size-7 mb-5" />
					<p>{topic.title}</p>
					<p class="text-neutral-secondary font-light pr-5">{topic.description}</p>
				</div>
			{/each}
		</div>		
    </div>
</section>