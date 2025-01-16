<script>
	import { BookOpen, Eye, GlobeAlt } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	const metrics = [
		{
			icon: Eye,
			title: 'Last Newsletter Views',
			value: 10320
		},
		{
			icon: BookOpen,
			title: 'Average Open Rate',
			value: '23%'
		},
		{
			icon: GlobeAlt,
			title: 'Total Subscribers',
			value: 320
		}
	];
</script>

<section class="flex w-full justify-center border-b-2 border-dashed border-neutral-800">
	<div
		class="flex w-5/6 flex-wrap border-x-2 border-dashed border-neutral-800 md:w-3/4 md:flex-nowrap md:divide-x-2"
	>
		{#each metrics as metric, index}
			<div
				class="grow border-dashed border-neutral-800 p-5 md:border-y-0"
				class:border-y-2={index !== 0 && index !== metrics.length - 1}
			>
				<Icon src={metric.icon} class="mb-5 size-7 text-white" />
				<p>{metric.title}</p>
				<p class="pr-5 font-light text-neutral-secondary">{metric.value}</p>
			</div>
		{/each}
	</div>
</section>
