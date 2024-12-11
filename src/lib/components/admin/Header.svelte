<script>
    import { newsletterIcon, newsletterName } from "$lib/config";
</script>
<header class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
	<div class="flex p-10 items-center w-5/6 md:w-3/4 h-16 border-dashed border-x-2 border-neutral-800">
		<a href="/" class="flex items-center grow gap-3">
			<img class="w-11 h-11" src={ newsletterIcon } alt="Newsletter Logo" />
			<p class="text-medium font-medium font-sans">{ newsletterName }</p>
		</a>
        <a href="/auth/logout" class="rounded-xl font-xs p-2 bg-transparent text-white border-2 border-neutral-800">
			Logout
		</a>
	</div>
</header>
