<script lang="ts">
	import './layout.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<Header/>

<svelte:head><link rel="icon" href="/imgs/vegetable.png" />
<title>kat wang</title>
</svelte:head>
{@render children()}

<Footer/>
