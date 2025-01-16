<script>
	import { socials } from '$lib/config';
</script>

<footer
	class="absolute bottom-0 h-auto w-full border-t-2 border-dashed border-neutral-800 bg-[#19191d] px-5 py-5 font-light text-neutral-secondary lg:px-10"
>
	<div class="flex flex-col items-start justify-between md:flex-row md:items-center">
		<div class="pb-5">
			<span class="pr-2">
				Deployed by
				<a
					class="text-white underline"
					href="https://appwrite.io"
					target="_blank"
					rel="noopener noreferrer"
				>
					Appwrite.
				</a>
			</span>
			<span>
				Source code on
				<a
					class="text-white underline"
					href="https://github.com/appwrite/newsletter"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github.
				</a>
			</span>
		</div>

		<div class="flex gap-3 pb-5 md:pb-0">
			{#each socials as social}
				<a
					class="relative size-8 rounded-md border border-neutral-strong transition-all duration-200 ease-in-out hover:border-neutral-500"
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.name}
				>
					<object
						class="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-200 ease-in-out hover:scale-110"
						title={social.name}
						type="image/svg+xml"
						data={`/icons/${social.icon}.svg`}
					></object>
				</a>
			{/each}
			<a
				class="relative size-8 rounded-md border border-neutral-strong transition-all duration-200 ease-in-out hover:border-neutral-500"
				href="/admin"
				aria-label="Admin Panel"
			>
				<object
					class="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-200 ease-in-out hover:scale-110"
					title="Admin Panel"
					type="image/svg+xml"
					data={`/icons/admin.svg`}
				></object>
			</a>
		</div>
	</div>
</footer>
