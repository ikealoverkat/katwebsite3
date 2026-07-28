import matter from 'gray-matter';

export async function load() {
	const posts = import.meta.glob('./*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});

	const blogPosts = Object.entries(posts)
		.map(([path, markdown]) => {
			const { data } = matter(markdown as string);
			return {
				slug: path.replace('./', '').replace('.md', ''),
				title: data.title,
				date: data.date,
				preview: data.preview,
				thumbnail: data.thumbnail,
			};
		})
		.filter((post) => post.slug !== '');

	return {
		posts: blogPosts
	};
}
