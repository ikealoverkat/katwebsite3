<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	const posts = import.meta.glob('/src/routes/blog/*.md', {
		eager: true
	}) as Record<string, { default: any }>;

	const post = posts[`/src/routes/blog/${page.params.slug}.md`];

	const Content = post.default;
</script>

<article class="flex flex-col justify-center align-middle text-center m-12">
	<h1 class="text-6xl text-dark-blue">{data.title}</h1>
	<p class="text-xl text-teal italic">{data.date}</p>
	<div
		class="self-center text-xl m-8 prose leading-0 text-dark-blue prose-headings:font-normal
        prose-a:text-blue prose-a:underline prose-a:hover:decoration-wavy
        prose-h2:text-dark-pink prose-h3:text-red"
	>
		<Content />
	</div>
</article>
