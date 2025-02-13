<script>
	import { newsletterIcon, newsletterName } from '$lib/config';
</script>

<header class="flex w-full justify-center border-b-2 border-dashed border-neutral-800">
	<a
		href="/"
		class="flex h-32 w-5/6 items-center justify-center gap-3 border-x-2 border-dashed border-neutral-800 md:w-3/4"
	>
		<img class="h-11 w-11" src={newsletterIcon} alt="Newsletter Logo" />
		<p class="text-medium font-sans font-medium">{newsletterName}</p>
	</a>
</header>
