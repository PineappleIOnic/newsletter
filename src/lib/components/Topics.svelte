<script>
	const topics = [
		{
			title: "Security",
			icon: "lock-closed",
			description: "Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida."
		},
		{
			title: "Artificial Intelligence",
			icon: "sparkles",
			description: "Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida."
		},
		{
			title: "Databases",
			icon: "database",
			description: "Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida."
		},
		{
			title: "Frameworks",
			icon: "cube-transparent",
			description: "Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida."
		},
	]
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
					<object title={topic.title} type="image/svg+xml" data={`icons/${topic.icon}.svg`} class="w-7 h-7 mb-5"></object>
                    <p>{topic.title}</p>
                    <p class="text-neutral-secondary font-light pr-5">{topic.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>