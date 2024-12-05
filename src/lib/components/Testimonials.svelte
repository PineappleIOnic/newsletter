<script>
    import { createAppwriteBucketURL } from "$lib/appwrite-public";

    /**
     * @typedef {Object} Testimonial
     * @property {string} name - Name of the person providing the testimonial.
     * @property {string} handle - Handle or username.
     * @property {string} avatar - URL of the person's avatar.
     * @property {string} quote - Testimonial quote.
     */

    /** @type {Testimonial[]} */
    const testimonials = [
        {
            name: "Walter o'Brien",
            handle: "@walterobrien",
            avatar: createAppwriteBucketURL("walter"),
            quote:
                "Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida dignissim semper euismod. Imperdiet eget rhoncus eget purus.",
        },
        {
            name: "Walter o'Brien",
            handle: "@walterobrien",
            avatar: createAppwriteBucketURL("walter"),
            quote:
                "Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida dignissim semper euismod. Imperdiet eget rhoncus eget purus.",
        },
    ];
</script>

<section class="flex justify-center w-full">
	<div class="flex py-20 w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
        <p class="text-4xl font-normal pb-10">What developers say</p>

        <div class="flex w-full border-dashed border-y-2 divide-x border-neutral-800">
            {#each testimonials as testimonial}
                <div class="grow p-5 border-dashed border-neutral-800">
                    <div class="flex items-center pb-5 font-light">
                        <img src={testimonial.avatar} alt={testimonial.name} class="w-12 h-12 rounded-full object-cover"/>
                        <div class="text-neutral-secondary pl-3">
                            <p>{testimonial.name}</p>
                            <p>{testimonial.handle}</p>
                        </div>
                    </div>

                    <p class="text-neutral-secondary font-light pr-5">{testimonial.quote}</p>
                </div>
            {/each}
        </div>
	</div>
</section>