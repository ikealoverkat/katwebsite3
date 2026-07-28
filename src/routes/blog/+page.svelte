<script lang="ts">
	let { data } = $props();
</script>

<main class="flex flex-col bg-linear-to-b from-cream to-white">
	<div
		class="m-9 flex w-3/4 flex-row items-center justify-center gap-24 self-center border-b border-b-red p-4.5 pb-16"
	>
		<h1 class="text-[128px] text-red">blog</h1>
		<p class="w-5/12 text-[32px] leading-9.25 text-dark-blue">
			<i class="text-blue/60">/blôɡ/</i> <br />
			1. short for “weblog”
			<br /> 2. kat’s incoherent reflections on things that happen during her lifetime
		</p>
	</div>
	<div class="flex flex-col items-center gap-2">
		{#each data.posts as post}
			<a
				href={`/blog/${post.slug}`}
				class="m-4 mx-36 flex w-3/4 flex-row gap-12 border-b border-b-blue bg-white/10 p-4 pb-10 duration-150 hover:p-6"
			>
				<img class="outline-1 min-h-30 max-h-30 min-w-60 max-w-60 object-cover outline-dark-blue" alt="" src={post.thumbnail} />
				<article>
					<div class="flex flex-row gap-2 justify-between items-center mb-4">
						<h2 class="text-[32px] leading-[37px] text-pretty text-blue hover:underline">{post.title}</h2>
						<p class="text-[24px] text-red">{post.date}</p>
					</div>
					<p class="text-[20px] leading-[23px] text-pretty text-dark-blue">{post.preview}</p>
				</article>
			</a>
		{/each}
	</div>
</main>
