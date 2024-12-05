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
				"Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida.",
		},
		{
			title: "Artificial Intelligence",
			icon: Sparkles,
			description:
				"Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida.",
		},
		{
			title: "Databases",
			icon: CircleStack,
			description:
				"Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida.",
		},
		{
			title: "Frameworks",
			icon: CubeTransparent,
			description:
				"Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida.",
		},
	];
</script>

<section class="flex justify-center w-full">
	<div class="flex py-20 w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
        <div class="text-center w-3/4 max-w-3xl pb-16">
            <p class="text-3xl pb-5">New topics every week</p>
            <p class="text-neutral-secondary font-light">Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida dignissim semper euismod. Imperdiet eget rhoncus eget purus.</p>
        </div>

        <div class="flex w-full border-dashed border-y-2 divide-x border-neutral-800">
            {#each topics as topic}
                <div class="grow p-5 border-dashed border-neutral-800">
					<Icon src="{topic.icon}" class="text-white size-7 mb-5" />
                    <p>{topic.title}</p>
                    <p class="text-neutral-secondary font-light pr-5">{topic.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>