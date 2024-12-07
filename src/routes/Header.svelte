<script>
    import { newsletterIcon, newsletterName } from "$lib/config";
</script>
<header class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
	<a href="/" class="flex justify-center items-center w-5/6 md:w-3/4 h-32 gap-3 border-dashed border-x-2 border-neutral-800">
		<img class="w-11 h-11" src={newsletterIcon} alt="Newsletter Logo" />
		<p class="text-medium font-medium font-sans">{ newsletterName }</p>
	</a>
</header>
