import matter from 'gray-matter';

export async function load({ params }) {
	const rawPosts = import.meta.glob('/src/routes/blog/*.md', {
		query: '?raw',
		import: 'default'
	});

	const match = Object.entries(rawPosts).find(([path]) =>
		path.endsWith(`/${params.slug}.md`)
	);

	if (!match) {
		throw new Error(`Post not found: ${params.slug}`);
	}

	const markdown = await match[1]();
	const { data } = matter(markdown as string);

	return {
		title: data.title,
		date: data.date
	};
}