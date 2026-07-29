<script lang="ts">
	import { onMount } from 'svelte';

	let { width, height } = $props();

	let hover: HTMLAudioElement;
	let click: HTMLAudioElement;

	onMount(() => {
		hover = new Audio('/sounds/hover2.wav');
		click = new Audio('/sounds/click2.mp3');
	});

	function playHover() {
		if (!hover) return;
		hover.currentTime = 0;
		hover.play();
	}

	function playClick() {
		if (!click) return;
		click.currentTime = 0;
		click.play();
	}
</script>

<div class="my-4 flex flex-row gap-2">
	<a href="https://instagram.com/777luckykat" class="contact-item">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src="/imgs/contact-ig.png"
			alt="link to my instagram"
			{width}
			{height}
			onclick={playClick}
			onmouseenter={playHover}
		/></a
	>
	<a href="mailto:kat@hackclub.com" class="contact-item">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src="/imgs/contact-mail.png"
			alt="email me!"
			{width}
			{height}
			onclick={playClick}
			onmouseenter={playHover}
		/></a
	>
	<a href="https://github.com/ikealoverkat" class="contact-item">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src="/imgs/contact-gh.png"
			alt="link to my github"
			{width}
			{height}
			onclick={playClick}
			onmouseenter={playHover}
		/></a
	>
	<a href="https://hackclub.enterprise.slack.com/team/U08H34LLQQJ" class="contact-item">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src="/imgs/contact-slack.png"
			alt="send a slack dm!"
			{width}
			{height}
			onclick={playClick}
			onmouseenter={playHover}
		/></a
	>
</div>
