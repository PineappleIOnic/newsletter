<script>
	import MarkdownEditor from '$lib/components/admin/editor/markdownEditor.svelte';
	import { newsletterName } from '$lib/config';
</script>

<svelte:head>
	<title>Create Newsletter</title>
</svelte:head>

<section class="flex w-full justify-center border-b-2 border-dashed border-neutral-800">
	<div
		class="flex w-5/6 flex-col items-center border-x-2 border-dashed border-neutral-800 p-5 md:w-3/4"
	>
		<div class="flex w-full flex-wrap items-center gap-2 pb-10">
			<p class="text-2xl">Create Newsletter</p>
			<div class="grow"></div>
			<button class="font-xs rounded-xl border-2 border-neutral-800 bg-transparent p-2 text-white"
				>Save as draft
			</button>
			<button class="rounded-xl bg-white p-2 text-black">Create</button>
		</div>

		<label class="w-full pb-5 text-neutral-secondary">
			Newsletter Subject
			<input
				class="mt-2 w-full rounded-xl border-2 border-neutral-800 bg-transparent p-2 placeholder:opacity-65"
				name="subject"
				type="text"
				placeholder="e.g: 10 Tips for Better Writing"
			/>
		</label>

		<label class="w-full text-neutral-secondary">
			Newsletter Introduction
			<MarkdownEditor placeholder={`Welcome back to ${newsletterName}...`} name="intro" />
		</label>
	</div>
</section>
