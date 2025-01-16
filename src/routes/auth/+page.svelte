<script>
	import { newsletterName } from '$lib/config';
	import Header from '../Header.svelte';

	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { form } = $props();
	let email = $state('');

	let activeForm = $state(0);
</script>

<svelte:head>
	<title>{newsletterName} - Auth</title>
</svelte:head>

<Header />
<div
	class="absolute left-1/2 top-1/2 w-full max-w-xs -translate-x-1/2 -translate-y-1/2 text-center"
>
	{#if activeForm === 0}
		<h1 class="pb-5 text-5xl">Sign in</h1>
		{#if form?.success}
			<p class="rounded-xl border-2 border-emerald-700 p-2">Account successfully created</p>
		{/if}
		{#if form?.incorrect}
			<p class="rounded-xl border-2 border-red-700 p-2">Incorrect email or password</p>
		{/if}
		<form class="mt-5 flex flex-col gap-3" action="?/login" method="POST">
			<input
				class="rounded-lg border border-[rgba(232,233,240,0.12)] bg-[rgba(255,255,255,0.04)] p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="email"
				name="email"
				placeholder="Email"
				value={form?.email ?? email ?? ''}
				required
			/>
			<input
				class="rounded-lg border border-[rgba(232,233,240,0.12)] bg-[rgba(255,255,255,0.04)] p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="password"
				name="password"
				placeholder="Password"
				required
			/>
			<button
				class="font-s rounded-lg bg-white p-3 text-black transition-all duration-200 hover:bg-neutral-100"
				type="submit"
				>Sign in
			</button>
		</form>
	{:else if activeForm === 1}
		<h1 class="pb-5 text-5xl">Register</h1>
		<form class="mt-5 flex flex-col gap-3" action="?/register" method="POST">
			<input
				class="rounded-lg border border-neutral-700 bg-neutral-800 p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="text"
				name="name"
				placeholder="Name"
				required
			/>
			<input
				class="rounded-lg border border-neutral-700 bg-neutral-800 p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="email"
				name="email"
				placeholder="Email"
				required
			/>
			<input
				class="rounded-lg border border-neutral-700 bg-neutral-800 p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="password"
				name="password"
				placeholder="Password"
				required
			/>
			<input
				class="rounded-lg border border-neutral-700 bg-neutral-800 p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="password"
				name="confirm"
				placeholder="Confirm password"
				required
			/>
			<button
				class="font-s rounded-lg bg-white p-3 text-black transition-all duration-200 hover:bg-neutral-100"
				type="submit"
				>Create account
			</button>
		</form>
	{:else if activeForm === 3}
		<h1 class="pb-5 text-5xl">Forgot password</h1>
		<form class="mt-5 flex flex-col gap-3" action="?/forgot" method="POST">
			<input
				class="rounded-lg border border-neutral-700 bg-neutral-800 p-3 transition-all duration-200 placeholder:text-neutral-500 hover:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
				type="email"
				name="email"
				placeholder="Email"
				required
			/>
			<button
				class="font-s rounded-lg bg-white p-3 text-black transition-all duration-200 hover:bg-neutral-100"
				type="submit"
				>Reset password
			</button>
		</form>
	{/if}

	<div class="mt-5 flex justify-center">
		{#if activeForm !== 3}
			<button class="mt-5 text-neutral-secondary underline" onclick={() => (activeForm = 3)}
				>Forgot password?
			</button>
			<span class="mx-2 grow text-neutral-secondary"></span>
		{/if}
		{#if !activeForm}
			<button class="mt-5 text-neutral-secondary underline" onclick={() => (activeForm = 1)}>
				Create account
			</button>
		{/if}
		{#if activeForm}
			<button class="mt-5 text-neutral-secondary underline" onclick={() => (activeForm = 0)}>
				Sign in
			</button>
		{/if}
	</div>
</div>

<style>
	/* Fix the autofill background issue */
	input:-webkit-autofill {
		background-clip: text;
		-webkit-text-fill-color: transparent !important;
	}
</style>
