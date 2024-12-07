<script>
    import { newsletterName } from '$lib/config';

	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { form } = $props();

    let registering = $state(false);
</script>

<svelte:head>
    <title>{newsletterName} - Auth</title>
</svelte:head>

<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-xs w-full">
    {#if !registering}
        <h1 class="text-5xl pb-5">Sign In</h1>
        {#if form?.success}
            <p class="p-2 border-2 border-emerald-700 rounded-xl">Account successfully created</p>
        {/if}
        {#if form?.incorrect}
            <p class="p-2 border-2 border-red-700 rounded-xl">Incorrect email or password</p>
        {/if}
        <form class="flex flex-col gap-3 mt-5" action="?/login" method="POST">
            <input class="bg-transparent p-3 border-2 border-neutral-700 rounded-xl" type="email" name="email" placeholder="Email" value={form?.email ?? ''} required>
            <input class="bg-transparent p-3 border-2 border-neutral-700 rounded-xl" type="password" name="password" placeholder="Password" required>
            <button class="rounded-xl font-s p-3 bg-white text-black" type="submit">Sign In</button>
        </form>
    {:else if registering}
        <h1 class="text-5xl pb-5">Register</h1>
        <form class="flex flex-col gap-3 mt-5" action="?/register" method="POST">
            <input class="bg-transparent p-3 border-2 border-neutral-700 rounded-xl" type="email" name="email" placeholder="Email" required>
            <input class="bg-transparent p-3 border-2 border-neutral-700 rounded-xl" type="password" name="password" placeholder="Password" required>
            <input class="bg-transparent p-3 border-2 border-neutral-700 rounded-xl" type="password" name="confirm" placeholder="Confirm Password" required>
            <button class="rounded-xl font-s p-3 bg-white text-black" type="submit">Create Account</button>
        </form>
    {/if}

    <p>{JSON.stringify(form)}</p>

    <div class="mt-5 flex">
        <a class="text-neutral-secondary underline mt-5" href="/auth/forgot">Forgot Password?</a>
        <span class="text-neutral-secondary mx-2 grow"></span>
        {#if !registering}<button class="text-neutral-secondary underline mt-5" onclick={ () => registering = true }>Create Account</button>{/if}
        {#if registering}<button class="text-neutral-secondary underline mt-5" onclick={ () => registering = false }>Sign In</button>{/if}
    </div>
</div>