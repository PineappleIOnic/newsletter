<script>
	import Metrics from '$lib/components/admin/Metrics.svelte';
	import Newsletters from '$lib/components/admin/Newsletters.svelte';
	import { newsletterName } from '$lib/config';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
	let user = data.user;
</script>

<svelte:head>
	<title>{newsletterName} - Admin Panel</title>
</svelte:head>

<section class="flex w-full justify-center border-b-2 border-dashed border-neutral-800">
	<div
		class="flex w-5/6 flex-col items-center border-x-2 border-dashed border-neutral-800 p-20 md:w-3/4"
	>
		<p class="text-4xl font-medium text-neutral-500">
			Welcome Back, <span class="text-white">{user.name}</span>
		</p>
		<p class="my-5 font-light text-neutral-secondary">
			Here is your newsletter's metrics at a glance.
		</p>
	</div>
</section>

<Metrics />
<Newsletters />
