<script>
    const socials = [
        {
            name: "Github",
            icon: "github",
            link: "https://github.com/appwrite/",
        },
        {
            name: "Youtube",
            icon: "youtube",
            link: "https://youtube.com/appwrite"
        },
        {
            name: "Discord",
            icon: "discord",
            link: "https://appwrite.io/discord"
        },
        {
            name: "X",
            icon: "x",
            link: "https://x.com/appwrite"
        },
    ];
</script>

<footer class="w-full flex h-20 border-dashed border-t-2 border-neutral-800 items-center px-10 text-neutral-secondary font-light">
    <div class="flex grow">
        <p class="pr-2">Deployed by <a class="text-white underline" href="https://appwrite.io" target="_blank" rel="noopener noreferrer">Appwrite.</a></p>
        <p>Source code on <a class="text-white underline" href="https://github.com/appwrite/newsletter" target="_blank" rel="noopener noreferrer">Github.</a></p>
    </div>

    <div class="flex gap-3">
        {#each socials as social}
            <a class="relative size-8 border rounded-md border-neutral-strong" href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <object class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" title={social.name} type="image/svg+xml" data={`icons/${social.icon}.svg`}></object>
            </a>
        {/each}
    </div>
</footer>