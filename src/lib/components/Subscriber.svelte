<div
	class="group mt-5 flex w-full items-center justify-between rounded-xl border border-[rgba(232,233,240,0.12)] bg-[rgba(255,255,255,0.04)] p-[4px] pl-4 backdrop-blur-[15px] transition-all focus-within:border-[rgba(232,233,240,0.5)] lg:w-[378px]"
>
	<form class="flex w-full" method="POST" action="/subscribe">
		<input
			name="email"
			type="email"
			class="peer mr-2 grow bg-transparent placeholder:text-[#E4E4E7] placeholder:opacity-65 focus:outline-none"
			placeholder="Enter your email"
		/>
		<button class="rounded-lg bg-white px-[14px] py-[9px] text-black">Sign up</button>
	</form>
</div>

<style>
	/* Fix the autofill background issue */
	input:-webkit-autofill {
		background-clip: text;
		-webkit-text-fill-color: transparent !important;
	}
</style>
