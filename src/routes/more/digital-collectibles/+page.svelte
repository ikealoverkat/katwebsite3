<script lang="ts">
	let funnypictures = Object.values(
		import.meta.glob('$lib/assets/funny/*', {
			query: '?url',			
            eager: true,
			import: 'default'
		})
	);
	import { onMount } from 'svelte';

	let hover: HTMLAudioElement;
	let click: HTMLAudioElement;

	onMount(() => {
		hover = new Audio('/sounds/hover2.wav');
		click = new Audio('/sounds/click1.mp3');
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

<main
	class="flex flex-col items-center justify-center gap-2 bg-linear-to-b from-pink/15 to-cream p-12 pb-18"
>
	<a
		onclick={playClick}
		onmouseenter={playHover}
		class="mx-12 self-center text-xl text-teal italic underline hover:decoration-wavy lg:self-start"
		href="/more">← back</a
	>
	<h2 class="text-5xl text-dark-blue">digital collectibles</h2>
	<p class="text-xl text-blue">cool...</p>
	<div class="m-8 flex flex-col items-center gap-4">
		<h1 class="text-3xl wrap-break-word text-dark-pink underline">
			put my button on your website!!! plz
		</h1>
		<img
			alt="kat wang 88x31 button"
			src="/imgs/collect/button.gif"
			class="duration-100 hover:m-2 hover:scale-150"
		/>
	</div>

	<h1 class="text-3xl text-teal underline">blinkies</h1>
	<div class="m-2 flex flex-wrap items-center justify-center gap-4 self-center">
		<img src="/imgs/collect/blinkie1.gif" alt="women in stem" />
		<img src="/imgs/collect/blinkie2.gif" alt="stressed..." />
		<img src="/imgs/collect/blinkie3.gif" alt="energy drink addict" />
		<img src="/imgs/collect/fish1.webp" alt="fih ahh fih" />
		<img src="/imgs/collect/fish2.webp" alt="i love the sea" />
		<img src="/imgs/collect/blinkie-nyancat.gif" alt="nyan cat saying 'hi guys'" />
	</div>
	<h1 class="text-3xl text-red underline">stamps</h1>
	<div class="m-2 flex flex-wrap items-center justify-center gap-4 self-center">
		<img src="/imgs/collect/stamp1.webp" alt="more fih ahh fih" />
		<img src="/imgs/collect/stamp2.png" alt="hachiware saying ts pmo" />
		<img src="/imgs/collect/stamp3.png" alt="happy kaomoji" />
		<img src="/imgs/collect/stamp4.gif" alt="miku" />
		<img src="/imgs/collect/stamp5.png" alt="i support drawing in math class" />
		<img src="/imgs/collect/stamp6.gif" alt="jinbe-san" />
		<img src="/imgs/collect/stamp7.png" alt="happy cat thing" />
		<img src="/imgs/collect/stamp8.gif" alt="i support... um... ME" />
		<img src="/imgs/collect/stamp9.png" alt="you're doing great" />
	</div>
	<h1 class="text-3xl text-blue underline">
		...interesting... things my friends wanted me to put on this website
	</h1>
	<div class="m-2 flex flex-wrap items-center justify-center gap-2 self-center">
		{#each funnypictures as picture}
			<img src={picture} alt="" class="max-h-30" />
		{/each}
	</div>
</main>
