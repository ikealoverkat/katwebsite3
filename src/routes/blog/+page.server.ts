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
			if ((!data.thumbnail)) {
				return {
					slug: path.replace('./', '').replace('.md', ''),
					title: data.title,
					date: data.date,
					preview: data.preview,
					thumbnail: "https://i.postimg.cc/GtZVrpTH/image.png"
				};
			} else {
				return {
					slug: path.replace('./', '').replace('.md', ''),
					title: data.title,
					date: data.date,
					preview: data.preview,
					thumbnail: data.thumbnail
				};
			}
		})
		.filter((post) => post.slug !== '');

	return {
		posts: blogPosts
	};
}
