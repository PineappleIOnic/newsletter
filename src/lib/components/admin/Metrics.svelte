<script>
    import { BookOpen, Eye, GlobeAlt } from "@steeze-ui/heroicons";
    import { Icon } from "@steeze-ui/svelte-icon";

    const metrics = [
        {
            icon: Eye,
            title: "Last Newsletter Views",
            value: 10320
        },
        {
            icon: BookOpen,
            title: "Average Open Rate",
            value: "23%"
        },
        {
            icon: GlobeAlt,
            title: "Total Subscribers",
            value: 320
        },
    ];
</script>

<section class="flex justify-center w-full border-dashed border-b-2 border-neutral-800">
    <div class="flex w-5/6 md:w-3/4 border-dashed border-x-2 divide-x-2 border-neutral-800">
        {#each metrics as metric}
            <div class="grow p-5 border-dashed border-neutral-800">
                <Icon src="{metric.icon}" class="text-white size-7 mb-5" />
                <p>{metric.title}</p>
                <p class="text-neutral-secondary font-light pr-5">{metric.value}</p>
            </div>
        {/each}
    </div>
</section>