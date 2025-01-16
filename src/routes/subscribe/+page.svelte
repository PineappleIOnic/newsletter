<script>
	import { newsletterName } from '$lib/config';
	import Header from '../Header.svelte';
</script>

<svelte:head>
	<title>Email sent for {newsletterName}</title>
</svelte:head>

<Header />
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
	<p class="text-neutral text-6xl font-medium">Email sent</p>
	<p
		class="my-5 pb-5 text-center text-[18px] font-light leading-[28px] tracking-[-0.2px] text-gray-400"
	>
		We've sent you an email to confirm your subscription to {newsletterName}. Please check your
		inbox and click the confirmation link to complete your signup.
	</p>

	<a href="/" class="font-s rounded-xl bg-white p-3 text-black">Return to homepage</a>
</div>
