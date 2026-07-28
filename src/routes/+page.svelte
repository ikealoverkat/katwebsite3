<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const HERO_IMAGE_COUNT = 17;
	const imagePaths = Array.from({ length: HERO_IMAGE_COUNT }, (_, i) => `/imgs/hero/${i + 1}.jpg`);

	let currentImgNumber = $state(0);

	const currentImage = $derived(imagePaths[currentImgNumber]);

	onMount(() => {
		const interval = setInterval(() => {
			currentImgNumber = (currentImgNumber + 1) % imagePaths.length;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<div class="bg-linear-to-b from-cream to-white">
	<!-- hero -->
	<div
		class="reveal-section flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-12 md:-my-24 md:flex-row md:py-0"
	>
		<div
			class="relative h-[16rem] w-[18rem] shrink-0 outline-1 outline-dark-blue sm:h-[20rem] sm:w-[22rem]"
		>
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
			<p
				class="text-[18px] leading-[24px] text-dark-blue sm:text-[20px] sm:leading-[28px] md:text-[24px]"
			>
				1. someone who likes to make games, websites, and illustrations
				<br />2. most intelligent
				<a
					class="bg-linear-to-r from-blue to-dark-pink bg-clip-text text-transparent underline hover:decoration-wavy"
					href="https://hackclub.com"
					target="_blank">hack clubber</a
				>
			</p>
			<!-- make this a component later -->
			<div class="my-4 flex flex-row gap-3">
				<a href="https://instagram.com/777luckykat" class="contact-item"
					><img src="/imgs/contact-ig.png" alt="link to my instagram" /></a
				>
				<a href="mailto:kat@hackclub.com" class="contact-item"
					><img src="/imgs/contact-mail.png" alt="email me!" /></a
				>
				<a href="https://github.com/ikealoverkat" class="contact-item"
					><img src="/imgs/contact-gh.png" alt="link to my github" /></a
				>
				<a href="https://hackclub.enterprise.slack.com/team/U08H34LLQQJ" class="contact-item"
					><img src="/imgs/contact-slack.png" alt="send a slack dm!" /></a
				>
			</div>
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
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-40 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
			</div>
			<div class="flex flex-col text-left lg:mr-20">
				<h1 class="text-[32px] leading-tight text-red sm:text-[40px] lg:text-[48px] lg:leading-12">
					hack club athena intern
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					june-july 2026 • <a
						href="placeholder"
						class="text-dark-pink underline hover:decoration-wavy">see the blog post here</a
					>
				</p>
				<p class="text-[18px] text-dark-blue sm:text-[20px] lg:text-[24px]">
					For a month, I worked a 9-5 at <a
						href="hackclub.com"
						class="text-blue underline hover:decoration-wavy">hack club</a
					>, a tech nonprofit with an active community of 100k+ teens that gives teens free prizes
					for building technnical projects. I worked specifically for
					<a href="athena.hackclub.com" class="text-blue underline hover:decoration-wavy">athena</a
					>, a part of the nonprofit that focuses on getting more girls into tech. made brands,
					websites, and illustrations. Also lived in a dorm with 24 other interns. cool!
				</p>
			</div>
		</div>
		<!-- freelance -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row-reverse lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:mr-20 lg:min-w-7/16 lg:flex-nowrap lg:*:h-70 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
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
					<br /> <a class="text-dark-pink italic underline hover:decoration-wavy">see more</a>
				</p>
			</div>
		</div>
		<!-- lead school events -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-40 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
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
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:mr-20 lg:min-w-7/16 lg:flex-nowrap lg:*:h-40 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
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
						class="text-blue italic underline hover:decoration-wavy">see here</a
					> <br /> i also love my hometown friends yall r cool #dayones
				</p>
			</div>
		</div>
		<!-- code -->
		<div class="reveal-section ml-0 flex flex-col gap-6 md:ml-12 lg:flex-row lg:gap-14">
			<div
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-40 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
			</div>
			<div class="flex flex-col text-left lg:mr-20">
				<h1 class="text-[32px] leading-tight text-red sm:text-[40px] lg:text-[48px] lg:leading-12">
					code
				</h1>
				<p class="mb-2 text-[18px] text-dark-blue italic sm:text-[20px] lg:text-[24px]">
					since march 2025 • <a
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
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:mr-20 lg:min-w-7/16 lg:flex-nowrap lg:*:h-40 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
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
				class="flex w-full flex-row flex-wrap items-center justify-center gap-4 *:h-24 *:w-[45%] *:object-cover *:outline *:outline-dark-blue sm:*:h-32 sm:*:w-[30%] lg:min-w-7/16 lg:flex-nowrap lg:*:h-40 lg:*:w-auto lg:*:min-w-0 lg:*:flex-1"
			>
				<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
				<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
				<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
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
				<p class="text-[18px] break-words text-dark-blue sm:text-[20px] lg:text-[24px]">
					I LOVE BEABADOOBEE <br />
					I GOT CONCERT TICKETS FOR PYLON OCT 7<br />
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
			<button class="message-button bg-pink">you have too many words on your website</button>
			<button class="message-button bg-light-yellow">fih ahh fih</button>
			<button class="message-button bg-[#b9cbfe]">No <br /> I am working</button>
		</div>
		<p class="text-[18px] text-dark-blue sm:text-[24px]">or you can</p>
		<input
			placeholder="write a message..."
			type="text"
			class="message-custom w-full outline sm:w-auto"
		/>
		<input type="submit" value="cool!" class="message-submit outline" />
	</div>
</div>
