<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const imagePaths = Object.values(
		import.meta.glob('$lib/assets/hero/*', {
			query: '?url',			
			eager: true,
			import: 'default'
		})
	);

	let currentImgNumber = $state(0);

	const currentImage = $derived(imagePaths[currentImgNumber]);

	let message = $state('');
	let preset = $state('');

	let hover: HTMLAudioElement;
	let click: HTMLAudioElement;
	let celebrate: HTMLAudioElement;

	onMount(() => {
		const interval = setInterval(() => {
			currentImgNumber = (currentImgNumber + 1) % imagePaths.length;
		}, 5000);

		hover = new Audio('/sounds/hover.wav');
		click = new Audio('/sounds/click1.mp3');
		celebrate = new Audio('/sounds/yay.mp3');

		return () => clearInterval(interval);
	});

	async function sendMessage() {
		try {
			await fetch('/api/message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					message,
					preset
				})
			});
			console.log(message + ' ' + preset);
			message = '';
			preset = '';
		} catch (err) {
			console.error(err);
		}
	}

	function playHover() {
		hover.currentTime = 0;
		hover?.play();
	}

	function playClick() {
		click.currentTime = 0;
		click?.play();
	}

	function playCelebrate() {
		celebrate.currentTime = 0;
		celebrate?.play();
	}
</script>

<div class="bg-linear-to-b from-cream to-white">
	<!-- hero -->
	<div
		class="reveal-section flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-12 md:-my-24 md:flex-row md:py-0"
	>
		<div class="relative h-64 w-[18rem] shrink-0 outline-1 outline-dark-blue sm:h-80 sm:w-88">
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
		<div
			class="flex w-full max-w-md flex-col items-center text-center md:w-5/18 md:items-start md:text-left"
		>
			<p class="-mb-2 text-[18px] font-bold text-red sm:text-[24px]">DICTIONARY</p>
			<div class="flex flex-row flex-wrap items-baseline justify-center gap-4 md:justify-start">
				<h1 class="text-[40px] text-dark-blue sm:text-[52px] md:text-[64px]">kat wang</h1>
				<p
					class="text-[16px] text-dark-blue/50 italic duration-200 hover:scale-105 hover:underline sm:text-[20px]"
				>
					/kˈat wˈaŋɡ/
				</p>
			</div>
			<p class="text-[18px] leading-6 text-dark-blue sm:text-[20px] sm:leading-7 md:text-[24px]">
				1. someone who likes to make games, websites, and illustrations
				<br />2. most intelligent
				<a
					class="bg-linear-to-r from-blue to-dark-pink bg-clip-text text-transparent underline hover:decoration-wavy"
					href="https://hackclub.com"
					target="_blank">hack clubber</a
				>
			</p>
			<div class="m-2"><Contact width="36px" height="36px" /></div>
		</div>
	</div>
	<!-- what does she even do -->
	<div class="mx-4 my-12 flex flex-col gap-12 sm:m-10 md:m-20 md:gap-16">
		<h2
			class="reveal-section m-2 text-[24px] font-bold text-dark-pink underline sm:m-4 sm:text-[28px] md:text-[32px]"
		>
			WHAT DOES SHE EVEN DO??
		</h2>
		<!-- hc internship -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-50 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="all the interns!" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
			</div>
			<div class="flex flex-col text-left lg:mr-20">
				<h1 class="text-[32px] leading-tight text-red sm:text-[40px] lg:text-[48px] lg:leading-12">
					hack club athena intern
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					june-july 2026 • <a
						onclick={playClick}
						onmouseenter={playHover}
						href="placeholder"
						class="text-dark-pink underline hover:decoration-wavy">see the blog post here</a
					>
				</p>
				<p class="text-[18px] text-dark-blue sm:text-[20px] lg:text-[24px]">
					For a month, I worked a 9-5 at <a
						href="hackclub.com"
						class="text-blue underline hover:decoration-wavy"
						onclick={playClick}
						onmouseenter={playHover}>hack club</a
					>, a tech nonprofit with an active community of 100k+ teens that gives teens free prizes
					for building technnical projects. I worked specifically for
					<a
						onclick={playClick}
						onmouseenter={playHover}
						href="athena.hackclub.com"
						class="text-blue underline hover:decoration-wavy">athena</a
					>, a part of the nonprofit that focuses on getting more girls into tech. made brands,
					websites, and illustrations. Also lived in a dorm with 24 other interns. cool!
				</p>
			</div>
		</div>
		<!-- freelance -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row-reverse lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-40 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:mr-20 lg:min-w-7/16 lg:flex-nowrap lg:*:h-70 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/freelance-1.png" alt="landscape painting" />
				<img src="/imgs/landing/freelance-2.png" alt="digital drawing of the golden gate bridge" />
				<img src="/imgs/landing/freelance-3.jpg" alt="painting of a cat" />
			</div>
			<div class="flex flex-col text-left">
				<h1 class="text-[32px] leading-tight text-blue sm:text-[40px] lg:text-[48px] lg:leading-12">
					freelance illustration
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					since 2024
				</p>
				<p class="text-[18px] text-dark-blue sm:text-[20px] lg:text-[24px]">
					I like to draw and paint. sometimes i sell my drawings and paintings to people and
					companies! heres some of my favourite drawings → <br />
					sometimes, hack club also hires me as a contractor. the people there like my drawings. cool!
					<br />
					<a
						class="text-dark-pink italic underline hover:decoration-wavy"
						href="/more/drawings"
						onclick={playClick}
						onmouseenter={playHover}>see more</a
					>
				</p>
			</div>
		</div>
		<!-- lead school events -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-60 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/school-1.JPG" alt="me in front of grade sign" />
				<img src="/imgs/landing/school-2.jpg" alt="me and lots of others in my grade" />
				<img
					src="/imgs/landing/school-3.JPG"
					alt="me and 2 other student council volunteers being dumb"
				/>
			</div>
			<div class="flex flex-col text-left lg:mr-20">
				<h1
					class="text-[32px] leading-tight text-dark-pink sm:text-[40px] lg:text-[48px] lg:leading-12"
				>
					lead school events
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					since september 2025
				</p>
				<p class="text-[18px] leading-6 text-dark-blue sm:text-[20px] lg:text-[24px] lg:leading-7">
					student council co-head of publicity (2025-26) <br /> student council head of arts
					(2026-27) <br />
					head of arts club (we paint murals) <br /> school robotics (frc 7476 software) <br /> cool...
				</p>
			</div>
		</div>
		<!-- hang out w friends -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row-reverse lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-40 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:mr-20 lg:min-w-7/16 lg:flex-nowrap lg:*:h-60 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/friends-1.jpg" alt="me and 2 friends downtown" />
				<img src="/imgs/landing/friends-2.jpg" alt="me and 2 friends in singapore" />
				<img src="/imgs/landing/friends-3.jpg" alt="me and 3 intern friends at the beach" />
			</div>
			<div class="flex flex-col text-left">
				<h1 class="text-[32px] leading-tight text-blue sm:text-[40px] lg:text-[48px] lg:leading-12">
					hang out with friends
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					since 2016
				</p>
				<p class="text-[18px] text-dark-blue sm:text-[20px] lg:text-[24px]">
					i love my friends! since i joined hack club, i've gotten more opportunities to travel,
					which means more opportunities to make friends. i have lots of blog posts about hack club
					events and they feature my friends too :) <a
						href="/blog"
						class="text-blue italic underline hover:decoration-wavy"
						onclick={playClick}
						onmouseenter={playHover}>see here</a
					> <br /> i also love my hometown friends yall r cool #dayones
				</p>
			</div>
		</div>
		<!-- code -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-30 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-45 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img
					src="/imgs/landing/code-1.jpg"
					alt="munchieguardian, the game i put a lot of effort into that still isnt done."
				/>
				<img
					src="https://cdn.hackclub.com/019fa20e-2f8a-77a1-9716-3ba491dedfa3/image.png"
					alt="cattatime project"
				/>
				<img src="/imgs/landing/code-3.png" alt="crunch time: alien gambling game" />
			</div>
			<div class="flex flex-col text-left lg:mr-20">
				<h1 class="text-[32px] leading-tight text-red sm:text-[40px] lg:text-[48px] lg:leading-12">
					code
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					since march 2025 • <a
						onclick={playClick}
						onmouseenter={playHover}
						href="https://github.com/ikealoverkat"
						class="text-blue underline hover:decoration-wavy">github</a
					>
				</p>
				<p class="text-[18px] text-dark-blue sm:text-[20px] lg:text-[24px]">
					i am learning things... <br /> made a stupid game about aliens, an unfinished game that i put
					a lot of effort into but still didn't finish, a few hackathon projects, and a lot of websites.
					many hack club websites. and 2.5 personal websites. nice!
				</p>
			</div>
		</div>
		<!-- have hobbies -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row-reverse lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-40 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:mr-20 lg:min-w-7/16 lg:flex-nowrap lg:*:h-60 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/hobby-1.jpg" alt="my island on tomodachi life" />
				<img src="/imgs/landing/hobby-2.jpg" alt="nails i did!" />
				<img
					src="/imgs/landing/hobby-3.gif"
					alt="me going up an escalator and pretending it's the stairmaster in nyc. LMAO"
				/>
			</div>
			<div class="flex flex-col text-left">
				<h1
					class="text-[32px] leading-tight text-dark-pink sm:text-[40px] lg:text-[48px] lg:leading-12"
				>
					have hobbies
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					occasionally...
				</p>
				<p class="text-[18px] text-dark-blue sm:text-[20px] lg:text-[24px]">
					even though i spend 90% of my time outside of work studying, sometimes i:
					<br /> • play nintendo switch games (splatoon 3, tomodachi life, acnh)
					<br /> • go to the gym
					<br /> • swim
					<br /> • sing & dance
					<br /> • make crafts (crochet, sew, jewelry-making)
				</p>
			</div>
		</div>
		<!-- code -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-35 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-80 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/bea-1.jpg" alt="my beabadobee painting" />
				<img src="/imgs/landing/bea-2.png" alt="my ticket to beabadoobees upcoming concert" />
				<img src="/imgs/landing/bea-3.jpg" alt="my beabadoobee poster" />
			</div>
			<div class="flex flex-col text-left lg:mr-20">
				<h1
					class="text-[28px] leading-tight font-bold text-dark-blue sm:text-[36px] lg:text-[48px] lg:leading-12"
				>
					LISTEN TO BEABADOOBEE
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					since june 2022
				</p>
				<p class="text-[18px] wrap-break-word text-dark-blue sm:text-[20px] lg:text-[24px]">
					I LOVE BEABADOOBEE <br />
					I GOT CONCERT TICKETS. POWERLINES TOUR OCT 8. PYLON PYLON PYLON<br />
					YEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
				</p>
			</div>
		</div>
	</div>
	<!-- send a message -->
	<div
		class="reveal-section mx-4 my-16 w-auto items-center justify-items-center justify-self-center bg-light-teal p-8 text-center align-middle outline outline-blue drop-shadow-xl drop-shadow-black/25 sm:mx-10 sm:mt-36 sm:w-11/18 sm:p-12 md:p-18"
	>
		<h1 class="text-[32px] text-dark-blue sm:text-[40px] md:text-[48px]">send a message to kat</h1>
		<p class="text-[18px] text-dark-blue sm:text-[24px]">here are some preset options</p>
		<div class="m-4 flex w-full flex-col gap-4 sm:m-8 sm:w-auto sm:flex-row sm:gap-6">
			<button
				class="message-button bg-pink"
				onclick={() => {
					preset = 'you have too many words on your website';
					message = '';
					sendMessage();
					playClick();
				}}
				onmouseenter={playHover}>you have too many words on your website</button
			>
			<button
				class="message-button bg-light-yellow"
				onclick={() => {
					preset = 'fih ahh fih';
					message = '';
					sendMessage();
					playClick();
				}}
				onmouseenter={playHover}>fih ahh fih</button
			>
			<button
				class="message-button bg-[#b9cbfe]"
				onclick={() => {
					preset = 'No I am Working';
					message = '';
					sendMessage();
					playClick();
				}}
				onmouseenter={playHover}>No <br /> I am working</button
			>
		</div>
		<p class="text-[18px] text-dark-blue sm:text-[24px]">or you can</p>
		<input
			bind:value={message}
			placeholder="write a message..."
			type="text"
			class="message-custom w-full outline sm:w-auto"
		/>
		<button
			class="message-submit outline"
			onclick={() => {
				sendMessage();
				playClick();
				playCelebrate();
			}}
			onmouseenter={playHover}
			disabled={!message}>cool!</button
		>
	</div>
</div>
