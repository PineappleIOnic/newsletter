<script>
    const newsletterPosts = [
        {
            title: "How to create a newsletter",
            views: 123,
            date: "2021-10-10" 
        }
    ];
</script>

<section class="grow flex justify-center w-full border-dashed border-b-2 border-neutral-800">
    <div class="w-5/6 md:w-3/4 border-dashed border-x-2 border-neutral-800">
        <div class="flex items-center pt-4 pb-6 px-3 ">
            <p class="grow text-2xl">Newsletters</p>
            {#if newsletterPosts.length !== 0}
                <button class="rounded-xl font-xs p-2 bg-white text-black">Create New</button>
            {/if}
        </div>

        {#if newsletterPosts.length !== 0}
            <table class="w-full border-collapse border-t-2 border-dashed border-neutral-800">
                <thead>
                    <tr class="border-b-2 border-dashed border-neutral-800">
                        <th class="text-left p-3 border-dashed border-neutral-800">Title</th>
                        <th class="text-left p-3 border-dashed border-neutral-800">Views</th>
                        <th class="text-left p-3 border-dashed border-neutral-800">Date</th>
                        <th class="text-left p-3 border-dashed border-neutral-800"></th>
                    </tr>
                </thead>
                <tbody class="divide-y-2">
                    {#each newsletterPosts as post}
                        <tr class="border-dashed border-neutral-800">
                            <td class="p-3">{post.title}</td>
                            <td class="p-3 text-neutral-secondary font-light">{post.views} views</td>
                            <td class="p-3 text-neutral-secondary font-light">{post.date}</td>
                            <td class="flex gap-3 flex-row-reverse p-3 text-neutral-secondary font-light">
                                <button class="rounded font-xs px-3 bg-white text-black">Edit</button>
                                <button class="rounded font-xs px-3 bg-white text-black">Delete</button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:else}
            <div class="text-center border-t-2 border-dashed border-neutral-800 py-10">
                <p class="pb-2">No newsletters yet</p>
                <p class="text-neutral-secondary pb-5">Create your first newsletter to start building your audience</p>
                <button class="rounded-xl font-xs p-2 bg-white text-black">Create newsletter</button>
            </div>
        {/if}
    </div>
</section>