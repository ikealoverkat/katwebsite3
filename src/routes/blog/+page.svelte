<script lang="ts">
	let { data } = $props();
</script>

<main class="flex flex-col bg-linear-to-b from-cream to-white">
	<div
		class="m-6 flex w-auto flex-col items-center justify-center gap-8 self-center border-b border-b-red p-4 pb-10
		sm:m-9 sm:w-3/4 sm:flex-row sm:gap-24 sm:p-4.5 sm:pb-16"
	>
		<h1 class="text-7xl text-red sm:text-[128px]">blog</h1>
		<p
			class="w-full text-center text-xl leading-7 text-dark-blue
			sm:w-5/12 sm:text-left sm:text-[32px] sm:leading-9.25"
		>
			<i class="text-blue/60">/blôɡ/</i>
			<br />
			1. short for “weblog”
			<br />
			2. kat’s incoherent reflections on things that happen during her lifetime
		</p>
	</div>

	<div class="flex flex-col items-center gap-2">
		{#each data.posts as post}
			<a
				href={`/blog/${post.slug}`}
				class="m-4 mx-6 flex w-auto flex-col gap-6 border-b border-b-blue bg-white/10 p-4 pb-10 duration-150 hover:p-6
				sm:mx-36 sm:w-3/4 sm:flex-row sm:gap-12"
			>
				<img
					class="h-48 w-full object-cover outline-1 outline-dark-blue
					sm:min-h-30 sm:max-h-30 sm:min-w-60 sm:max-w-60"
					alt=""
					src={post.thumbnail}
				/>
				<article>
					<div
						class="mb-4 flex flex-col gap-2
						sm:flex-row sm:items-center sm:justify-between"
					>
						<h2
							class="text-2xl leading-7 text-pretty text-blue hover:underline
							sm:text-[32px] sm:leading-[37px]"
						>
							{post.title}
						</h2>
						<p class="text-xl text-red sm:text-[24px]">{post.date}</p>
					</div>
					<p class="text-lg leading-6 text-pretty text-dark-blue sm:text-[20px] sm:leading-[23px]">
						{post.preview}
					</p>
				</article>
			</a>
		{/each}
	</div>
</main>