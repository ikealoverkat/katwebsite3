<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from '$lib/Contact.svelte';

	let hover: HTMLAudioElement;
	let click: HTMLAudioElement;

	onMount(() => {
		hover = new Audio('/sounds/hover.mp3');
		click = new Audio('/sounds/click1.mp3');
	});

	function playHover() {
		hover.currentTime = 0;
		hover?.play();
	}

	function playClick() {
		click.currentTime = 0;
		click?.play();
	}
</script>

<main class="flex flex-col gap-2 bg-linear-to-b from-cream to-white">
	<div class="m-6 items-center justify-center self-center text-center">
		<h1 class="text-6xl text-dark-pink sm:text-8xl lg:text-[128px]">other things</h1>
		<h3 class="text-2xl leading-6 text-teal lg:text-[32px]">loooooooooooooots of things</h3>
	</div>

	<div class="flex flex-col justify-center gap-12 self-center px-4 lg:flex-row lg:gap-24">
		<div class="text-center lg:text-left">
			<h2 class="text-[36px] text-dark-blue underline lg:text-[48px]">more about me</h2>
			<p class="text-[18px] leading-4 text-dark-blue/75 lg:text-[20px]">
				chinese-canadian • she/her
			</p>

			<p class="my-4 text-[20px] text-dark-blue lg:text-[24px]">
				i am currently in <b>ottawa.</b> if you are too, let's hang out! [<a
					href="https://discordapp.com/users/902566588815925368"
					target="_blank"
					class="text-blue underline hover:decoration-wavy"
					onclick={playClick} 
					onmouseenter={playHover}>discord</a
				>]
			</p>

			<div class="my-4 text-[20px] lg:text-[24px]">
				<p class="text-dark-pink">likes</p>
				<ul class="m-2 text-dark-blue">
					<li>• cats</li>
					<li>• water & marine life</li>
					<li>• making friends</li>
					<li class="inline-flex items-center gap-2">
						• asian food
						<img src="https://i.postimg.cc/xCrkZXQk/image.png" alt="drool emoji" class="h-7 w-7" />
					</li>
				</ul>

				<p class="text-red">dislikes</p>
				<ul class="text-dark-blue">
					<li>• pineapples</li>
					<li>• mean people</li>
					<li>• being too serious (evident from this website...)</li>
				</ul>
			</div>

			<div
				class="inline-flex flex-wrap items-center gap-6 text-[20px] text-dark-blue underline lg:text-[24px]"
			>
				reach out here:
				<Contact width="30px" height="30px" />
			</div>
		</div>

		<div class="m-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
			<a href="/more/music">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="more-box bg-light-teal" onclick={playClick} onmouseenter={playHover}>
					<h2 class="text-[48px] text-blue">MUSIC</h2>
					<img src="/imgs/more-music.png" alt="" />
				</div></a
			>

			<a href="/more/digital-collectibles">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="more-box bg-white" onclick={playClick} onmouseenter={playHover}>
					<h2 class="text-[32px] text-teal">digital collectibles</h2>
					<img src="/imgs/more-collect.png" alt="" />
				</div></a
			>

			<a href="/more/gamble">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="more-box bg-pink/13" onclick={playClick} onmouseenter={playHover}>
					<h2 class="text-[32px] text-dark-pink">777luckykat?</h2>
					<img src="/imgs/more-gamble.png" alt="" />
				</div></a
			>

			<a href="/more/drawings">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="more-box bg-light-yellow/45" onclick={playClick} onmouseenter={playHover}>
					<h2 class="text-[48px] text-red">drawings</h2>
					<img src="/imgs/more-draw.png" alt="" />
				</div></a
			>
		</div>
	</div>
</main>
