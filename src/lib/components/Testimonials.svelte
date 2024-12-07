<script>
    import kenway from "$lib/assets/kenway.jpg";
    import walter from "$lib/assets/walter.png";

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
            avatar: walter,
            quote:
                "This newsletter is my go-to source for insights. Every issue is packed with value, and I always come away inspired and informed!",
        },
        {
            name: "Edward Kenway",
            handle: "@e.kenway",
            avatar: kenway,
            quote:
                "I look forward to this newsletter every week. It’s concise, engaging, and always provides actionable takeaways that I can apply immediately.",
        },
    ];
</script>

<section class="flex justify-center w-full">
	<div class="flex py-20 w-5/6 md:w-3/4 flex-col items-center border-dashed border-x-2 border-neutral-800">
        <p class="text-4xl font-normal pb-10">What developers say</p>

        <div class="flex flex-wrap md:flex-nowrap w-full border-dashed border-y-2 xl:divide-x-2 max-xl:divide-y-2 border-neutral-800">
            {#each testimonials as testimonial}
                <div class="flex-grow p-5 border-dashed border-neutral-800 min-w-full md:min-w-80">
                    <div class="flex items-center pb-5 font-light">
                        <img src={testimonial.avatar} alt={testimonial.name} class="w-12 h-12 rounded-full object-cover"/>
                        <div class="text-neutral-secondary pl-3 w-full">
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