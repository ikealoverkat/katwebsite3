<script lang="ts">
    let funnypictures = Object.keys(import.meta.glob('$lib/assets/funny/*'));
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

<main class="flex flex-col items-center justify-center gap-2 bg-linear-to-b from-pink/15 to-cream p-12 pb-18">
	<a onclick={playClick} onmouseenter={playHover} class="self-center lg:self-start mx-12 text-xl text-teal italic underline hover:decoration-wavy" href="/more"
		>← back</a
	>	
    <h2 class="text-5xl text-dark-blue">digital collectibles</h2>
	<p class="text-xl text-blue">cool...</p>
	<div class="items-center flex flex-col gap-4 m-8">
		<h1 class="text-3xl wrap-break-word underline text-dark-pink">
			put my button on your website!!! plz
		</h1>
		<img alt="kat wang 88x31 button" src="/imgs/collect/button.gif" class="duration-100 hover:scale-150 hover:m-2" />
	</div>

	<h1 class="text-3xl text-teal underline">blinkies</h1>
	<div class="flex gap-4 items-center justify-center self-center flex-wrap m-2">
        <img src="/imgs/collect/blinkie1.gif" alt="women in stem">
        <img src="/imgs/collect/blinkie2.gif" alt="stressed...">
        <img src="/imgs/collect/blinkie3.gif" alt="energy drink addict">
        <img src="/imgs/collect/fish1.webp" alt="fih ahh fih">
        <img src="/imgs/collect/fish2.webp" alt="i love the sea">
        <img src="/imgs/collect/blinkie-nyancat.gif" alt="nyan cat saying 'hi guys'">        
    </div>
	<h1 class="text-3xl text-red underline">stamps</h1>
    <div class="flex gap-4 flex-wrap items-center justify-center self-center m-2">
        <img src="/imgs/collect/stamp1.webp" alt="more fih ahh fih">
        <img src="/imgs/collect/stamp2.png" alt="hachiware saying ts pmo">
        <img src="/imgs/collect/stamp3.png" alt="happy kaomoji">
        <img src="/imgs/collect/stamp4.gif" alt="miku">
        <img src="/imgs/collect/stamp5.png" alt="i support drawing in math class">
        <img src="/imgs/collect/stamp6.gif" alt="jinbe-san">        
        <img src="/imgs/collect/stamp7.png" alt="happy cat thing">
        <img src="/imgs/collect/stamp8.gif" alt="i support... um... ME">
        <img src="/imgs/collect/stamp9.png" alt="you're doing great">                        
    </div>
    <h1 class="text-3xl text-blue underline">...interesting... things my friends wanted me to put on this website</h1>
    <div class="flex flex-wrap gap-2 m-2 items-center justify-center self-center">
        {#each funnypictures as picture}
            <img src={picture} alt="" class="max-h-30"/>
        {/each}
    </div>
</main>
