<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	const posts = import.meta.glob('/src/routes/blog/*.md', {
		eager: true
	}) as Record<string, { default: any }>;

	const post = posts[`/src/routes/blog/${page.params.slug}.md`];

	const Content = post.default;
</script>

<article class="m-12 flex flex-col">
	<a class="text-lg italic text-blue underline hover:decoration-wavy m-4" href="/blog">← back</a>
    <div class="flex flex-col justify-center text-center align-middle">
		<h1 class="text-6xl text-dark-blue">{data.title}</h1>
		<p class="text-xl text-teal italic">{data.date}</p>
		<div
			class="m-8 prose items-center justify-items-center self-center text-xl leading-6.5
        text-dark-blue prose-headings:font-normal prose-h2:text-dark-pink
        prose-h3:text-red prose-a:text-blue prose-a:underline prose-a:hover:decoration-wavy
        prose-blockquote:text-dark-blue"
		>
			<Content />
		</div>
	</div>
</article>
