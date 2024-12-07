<script>
    import Header from "$lib/components/admin/Header.svelte";
    import Metrics from "$lib/components/admin/Metrics.svelte";
    import Newsletters from "$lib/components/admin/Newsletters.svelte";
    import { newsletterName } from "$lib/config";
</script>

<svelte:head>
    <title>{newsletterName} - Admin Panel</title>
</svelte:head>

<div class="min-h-full flex flex-col">
<Header />

<section class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
	<div class="flex p-20 w-5/6 md:w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
        <p class="text-neutral-500 text-4xl font-medium">Welcome Back, <span class="text-white">Walter O'Brien</span></p>
        <p class="font-light text-neutral-secondary my-5">Here is your newsletter's metrics at a glance.</p>
    </div>
</section>

<Metrics />
<Newsletters />
</div>