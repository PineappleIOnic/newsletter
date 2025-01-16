<script>
	import { CodeBracket, ListBullet, NumberedList } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let value = '';
	export let placeholder = 'Write something...';
	export let name = '';

	/**
	 * @type {HTMLTextAreaElement|null}
	 */
	let textarea = null;

	/**
	 * Insert markdown into the textarea
	 *
	 * @param {string} markdownStart
	 * @param {string} markdownEnd
	 */
	function insertMarkdown(markdownStart = '', markdownEnd = '') {
		if (!textarea) {
			return;
		}

		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const text = textarea.value;
		const before = text.substring(0, start);
		const selected = text.substring(start, end);
		const after = text.substring(end);

		textarea.value = `${before}${markdownStart}${selected}${markdownEnd}${after}`;
		textarea.focus();
		textarea.setSelectionRange(start + markdownStart.length, end + markdownStart.length);
		value = textarea.value;
	}
</script>

<div class="w-full">
	<div
		class="flex h-10 w-full justify-between rounded-t-xl border-2 border-neutral-800 p-2 text-base md:justify-normal md:gap-6"
	>
		<button class="flex items-center justify-center px-1" on:click={() => insertMarkdown('# ', '')}
			><span class="leading-none">H</span></button
		>
		<button
			class="flex items-center justify-center px-1"
			on:click={() => insertMarkdown('**', '**')}
			><span class="font-bold leading-none">B</span></button
		>
		<button class="flex items-center justify-center px-1" on:click={() => insertMarkdown('_', '_')}
			><span class="italic leading-none">I</span></button
		>
		<button
			class="flex items-center justify-center px-1"
			on:click={() => insertMarkdown('<u>', '</u>')}
			><span class="leading-none underline">U</span></button
		>
		<button
			class="flex items-center justify-center px-1"
			on:click={() => insertMarkdown('~~', '~~')}
			><span class="strikethrough leading-none">S</span></button
		>
		<button class="flex items-center justify-center px-1" on:click={() => insertMarkdown('`', '`')}
			><Icon src={CodeBracket} /></button
		>
		<button
			class="flex items-center justify-center px-1"
			on:click={() => insertMarkdown('- ', '\n')}><Icon src={ListBullet} /></button
		>
		<button
			class="flex items-center justify-center px-1"
			on:click={() => insertMarkdown('1. ', '\n')}><Icon src={NumberedList} /></button
		>
	</div>
	<textarea
		bind:this={textarea}
		class="min-h-20 w-full rounded-b-xl border-2 border-t-0 border-neutral-800 bg-transparent p-2 font-mono placeholder:opacity-65"
		bind:value
		{name}
		{placeholder}
	></textarea>
</div>
