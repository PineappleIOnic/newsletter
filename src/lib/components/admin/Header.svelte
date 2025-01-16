<script>
	import { newsletterIcon, newsletterName } from '$lib/config';
</script>

<header class="flex w-full justify-center border-b-2 border-dashed border-neutral-800">
	<div
		class="flex h-16 w-5/6 items-center border-x-2 border-dashed border-neutral-800 p-10 md:w-3/4"
	>
		<a href="/" class="flex grow items-center gap-3">
			<img class="h-11 w-11" src={newsletterIcon} alt="Newsletter Logo" />
			<p class="text-medium font-sans font-medium">{newsletterName}</p>
		</a>
		<a
			href="/auth/logout"
			class="font-xs rounded-xl border-2 border-neutral-800 bg-transparent p-2 text-white"
		>
			Logout
		</a>
	</div>
</header>
