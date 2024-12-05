<script>
    import { config } from "$lib/config";
    import Subscriber from "./Subscriber.svelte";
</script>

<section class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
	<div class="flex p-20 w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
		<div class="text-center w-3/4 max-w-3xl">
			<p class="text-neutral-500 text-6xl font-medium">The weekly newsletter</p>
			<p class="text-neutral text-6xl font-medium">for developers</p>
			<p class="font-light text-neutral-secondary my-5">Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida dignissim semper euismod. Imperdiet eget rhoncus eget purus.</p>
		</div>
		<Subscriber />
	</div>
</section>