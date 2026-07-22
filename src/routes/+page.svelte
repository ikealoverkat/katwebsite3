<script lang="ts">
	import {onMount} from 'svelte';
	import {fade} from 'svelte/transition';

	const HERO_IMAGE_COUNT = 18;
	const imagePaths = Array.from({length: HERO_IMAGE_COUNT}, (_, i) => `/imgs/hero/${i + 1}.jpg`);

	let currentImgNumber = $state(0);

	const currentImage = $derived(imagePaths[currentImgNumber]);

	onMount(() => {
		const interval = setInterval(() => {
			currentImgNumber = (currentImgNumber + 1) % imagePaths.length;
		}, 5000);

		return () => clearInterval(interval);
	})
</script>

<div class="bg-linear-to-b from-cream to-white">
	<!-- header -->
	<div
		class="sticky mx-8 mt-4 flex items-center justify-between bg-cream/75 text-[24px] backdrop-blur-md"
	>
		<div class="flex flex-row gap-6 text-dark-blue *:hover:underline *:decoration-wavy">
			<h2>home</h2>
			<h2>blog</h2>
			<h2>etc</h2>
		</div>
		<h2 class="text-teal">graphic design is my passion!!!!!!</h2>
	</div>
	<!-- main -->
	<div>
		<!-- hero -->
		<div class="flex justify-center m-16 gap-8">
			<div class="relative h-[20rem] w-[22rem] outline-1 outline-dark-blue">
				{#key currentImage}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<img
						src={currentImage}
						onclick={() => currentImgNumber++}
						alt="pictures of kat"
						class="absolute inset-0 h-full w-full object-cover"
						in:fade={{ duration: 400 }}
						out:fade={{ duration: 400 }}
					/>
				{/key}
			</div>
			<div class="flex flex-col w-5/18">
				<p class="font-bold text-[24px] text-red -mb-2">DICTIONARY</p>
                <div class="flex flex-row items-baseline gap-4">
					<h1 class="text-[64px] text-dark-blue">kat wang</h1>
					<p class="text-[20px] text-dark-blue/50 italic">/kˈat wˈaŋɡ/</p>
				</div>
                <p class="text-dark-blue text-[24px] leading-[28px]">
                    1. someone who likes to make games, websites, and illustrations
                    <br/>2. most intelligent <a class="bg-clip-text text-transparent bg-linear-to-r from-blue to-dark-pink underline hover:decoration-wavy" href="https://hackclub.com" target="_blank">hack clubber</a>
                </p> 
                <!-- make this a component later -->
                <div class="gap-3 my-4 flex flex-row">
                    <a href="https://instagram.com/777luckykat" class="contact-item"><img src="/imgs/contact-ig.png" alt="link to my instagram"/></a>
                    <a href="mailto:kat@hackclub.com" class="contact-item"><img src="/imgs/contact-mail.png" alt="email me!"/></a>
                    <a href="https://github.com/ikealoverkat" class="contact-item"><img src="/imgs/contact-gh.png" alt="link to my github"/></a>
                    <a href="https://hackclub.enterprise.slack.com/team/U08H34LLQQJ" class="contact-item"><img src="/imgs/contact-slack.png" alt="send a slack dm!"/></a>                                                            
                </div> 
			</div>
		</div>
	</div>
</div>
