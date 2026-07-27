<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	const posts = import.meta.glob('/src/routes/blog/*.md', {
		eager: true
	}) as Record<string, {default: any }>;

const post = posts[`/src/routes/blog/${page.params.slug}.md`];

const Content = post.default;
</script>

<article>
	<h1>{data.title}</h1>
	<p>{data.date}</p>

    <Content />
</article>