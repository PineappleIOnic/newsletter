<script>
	const newsletterPosts = [
		{
			title: 'How to create a newsletter',
			views: 123,
			date: '2021-10-10'
		}
	];
</script>

<div class="flex min-h-fit flex-col pb-40">
	<section class="flex w-full grow justify-center border-b-2 border-dashed border-neutral-800">
		<div class="w-5/6 border-x-2 border-dashed border-neutral-800 md:w-3/4">
			<div class="flex items-center px-3 pb-6 pt-4">
				<p class="grow text-2xl">Newsletters</p>
				{#if newsletterPosts.length !== 0}
					<a
						href="/admin/create"
						class="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-white text-black shadow-sm transition-all hover:bg-neutral-100"
						aria-label="Create New"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="12" y1="5" x2="12" y2="19" />
							<line x1="5" y1="12" x2="19" y2="12" />
						</svg>
					</a>
				{/if}
			</div>

			{#if newsletterPosts.length !== 0}
				<table
					class="w-full border-collapse overflow-auto border-t-2 border-dashed border-neutral-800"
				>
					<thead>
						<tr class="border-b-2 border-dashed border-neutral-800">
							<th class="border-dashed border-neutral-800 p-3 text-left">Title</th>
							<th class="border-dashed border-neutral-800 p-3 text-left">Views</th>
							<th class="border-dashed border-neutral-800 p-3 text-left">Date</th>
							<th class="border-dashed border-neutral-800 p-3 text-left"></th>
						</tr>
					</thead>
					<tbody class="divide-y-2">
						{#each newsletterPosts as post}
							<tr class="border-dashed border-neutral-800">
								<td class="p-3">{post.title}</td>
								<td class="p-3 font-light text-neutral-secondary">{post.views} views</td>
								<td class="p-3 font-light text-neutral-secondary">{post.date}</td>
								<!--                        <td class="flex flex-row-reverse gap-3 p-3 font-light text-neutral-secondary">-->
								<!--                            <button class="font-xs rounded bg-white px-3 text-black">View</button>-->
								<!--                            <button class="font-xs rounded bg-white px-3 text-black">Delete</button>-->
								<!--                        </td>-->
							</tr>
						{/each}
					</tbody>
				</table>
			{:else}
				<div class="border-t-2 border-dashed border-neutral-800 py-10 text-center">
					<p class="pb-2">No newsletters yet</p>
					<p class="pb-5 text-neutral-secondary">
						Create your first newsletter to start building your audience
					</p>
					<a href="/admin/create" class="font-xs rounded-xl bg-white p-2 text-black"
						>Create newsletter</a
					>
				</div>
			{/if}
		</div>
	</section>
</div>
