<script>
    import MarkdownEditor from "$lib/components/admin/editor/markdownEditor.svelte";
import { newsletterIcon, newsletterName } from "$lib/config";
</script>

<svelte:head>
    <title>Create Newsletter</title>
</svelte:head>

<section class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
	<div class="flex p-5 w-5/6 md:w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
        <div class="flex w-full items-center gap-2 pb-10">
            <p class="text-2xl">Create Newsletter</p>
            <div class="grow"></div>
            <button class="rounded-xl font-xs p-2 bg-transparent text-white border-2 border-neutral-800">Save as draft</button>
            <button class="rounded-xl p-2 bg-white text-black">Create</button>
        </div>

        <label class="w-full text-neutral-secondary pb-5">
            Newsletter Subject
            <input class="w-full bg-transparent mt-2 p-2 border-2 border-neutral-800 rounded-xl" name="subject" type="text" placeholder="e.g: 10 Tips for Better Writing">
        </label>

        <label class="w-full text-neutral-secondary">
            Newsletter Introduction
            <MarkdownEditor placeholder={`Welcome back to ${newsletterName}...`} name="intro"/>
        </label>
    </div>
</section>