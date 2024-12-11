<script>
    import { CodeBracket, ListBullet, NumberedList } from "@steeze-ui/heroicons";
    import { Icon } from "@steeze-ui/svelte-icon";

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
        textarea.setSelectionRange(
            start + markdownStart.length,
            end + markdownStart.length
        );
        value = textarea.value;
    }
</script>

<div class="w-full">
    <div class="w-full flex text-base p-2 h-10 border-2 border-neutral-800 rounded-t-xl">
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('# ', '')}><span class="leading-none">H</span></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('**', '**')}><span class="font-bold leading-none">B</span></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('_', '_')}><span class="italic leading-none">I</span></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('<u>', '</u>')}><span class="underline leading-none">U</span></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('~~', '~~')}><span class="strikethrough leading-none">S</span></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('`', '`')}><Icon src={CodeBracket} /></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('- ', '\n')}><Icon src={ListBullet}/></button>
        <button class="px-1 flex items-center justify-center" on:click={() => insertMarkdown('1. ', '\n')}><Icon src={NumberedList}/></button>
    </div>
    <textarea bind:this={textarea} class="w-full bg-transparent p-2 border-2 border-t-0 border-neutral-800 rounded-b-xl min-h-20 font-mono"  bind:value {name} {placeholder}></textarea>
</div>
