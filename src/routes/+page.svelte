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
	<!-- header -->
	<div
		class="sticky mx-4 sm:mx-8 mt-4 flex flex-wrap items-center justify-between gap-2 bg-cream/75 text-[16px] sm:text-[20px] md:text-[24px] backdrop-blur-md z-10"
	>
		<div class="flex flex-row gap-4 sm:gap-6 text-dark-blue *:decoration-wavy *:hover:underline">
			<h2>home</h2>
			<h2>blog</h2>
			<h2>etc</h2>
		</div>
		<h2 class="text-teal text-[14px] sm:text-[20px] md:text-[24px]">graphic design is my passion!!!!!!</h2>
	</div>
	<!-- main -->
	<div>
		<!-- hero -->
		<div
			class="my-8 md:-my-16 flex min-h-screen w-full flex-col md:flex-row items-center justify-center gap-8 px-4 py-12 md:py-0 reveal-section"
		>
			<div class="relative h-[16rem] w-[18rem] sm:h-[20rem] sm:w-[22rem] outline-1 outline-dark-blue shrink-0">
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
			<div class="flex w-full max-w-md md:w-5/18 flex-col text-center md:text-left items-center md:items-start">
				<p class="-mb-2 text-[18px] sm:text-[24px] font-bold text-red">DICTIONARY</p>
				<div class="flex flex-row items-baseline gap-4 flex-wrap justify-center md:justify-start">
					<h1 class="text-[40px] sm:text-[52px] md:text-[64px] text-dark-blue">kat wang</h1>
					<p class="text-[16px] sm:text-[20px] text-dark-blue/50 italic hover:scale-105 hover:underline duration-200">/kˈat wˈaŋɡ/</p>
				</div>
				<p class="text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] text-dark-blue">
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
		<div class="mx-4 my-12 sm:m-10 md:m-20 flex flex-col gap-12 md:gap-16">
			<h2 class="m-2 sm:m-4 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark-pink underline reveal-section">WHAT DOES SHE EVEN DO??</h2>
			<!-- hc internship -->
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row gap-6 lg:gap-14 reveal-section">
				<div
					class="flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-40 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
					<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
					<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
				</div>
				<div class="lg:mr-20 flex flex-col text-left">
					<h1 class="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-12 text-red">hack club athena intern</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">
						june-july 2026 • <a
							href="placeholder"
							class="text-dark-pink underline hover:decoration-wavy">see the blog post here</a
						>
					</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue">
						For a month, I worked a 9-5 at <a
							href="hackclub.com"
							class="text-blue underline hover:decoration-wavy">hack club</a
						>, a tech nonprofit with an active community of 100k+ teens that gives teens free prizes
						for building technnical projects. I worked specifically for
						<a href="athena.hackclub.com" class="text-blue underline hover:decoration-wavy"
							>athena</a
						>, a part of the nonprofit that focuses on getting more girls into tech. made brands,
						websites, and illustrations. Also lived in a dorm with 24 other interns. cool!
					</p>
				</div>
			</div>
			<!-- freelance -->
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row-reverse gap-6 lg:gap-14 reveal-section">
				<div
					class="lg:mr-20 flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-70 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/freelance-1.png" alt="landscape painting" />
					<img src="/imgs/landing/freelance-2.png" alt="digital drawing of the golden gate bridge" />
					<img src="/imgs/landing/freelance-3.jpg" alt="painting of a cat" />
				</div>
				<div class="flex flex-col text-left">
					<h1 class="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-12 text-blue">freelance illustration</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">since 2024</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue">
						I like to draw and paint. sometimes i sell my drawings and paintings to people and
						companies! heres some of my favourite drawings → <br />
						sometimes, hack club also hires me as a contractor. the people there like my drawings. cool!
						<br /> <a class="text-dark-pink italic underline hover:decoration-wavy">see more</a>
					</p>
				</div>
			</div>
			<!-- lead school events -->
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row gap-6 lg:gap-14 reveal-section">
				<div
					class="flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-40 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
					<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
					<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
				</div>
				<div class="lg:mr-20 flex flex-col text-left">
					<h1 class="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-12 text-dark-pink">lead school events</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">since september 2025</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] leading-6 lg:leading-7 text-dark-blue">
						student council co-head of publicity (2025-26) <br /> student council head of arts
						(2026-27) <br />
						head of arts club (we paint murals) <br /> school robotics (frc 7476 software) <br /> cool...
					</p>
				</div>
			</div>
			<!-- hang out w friends -->
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row-reverse gap-6 lg:gap-14 reveal-section">
				<div
					class="lg:mr-20 flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-40 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
					<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
					<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
				</div>
				<div class="flex flex-col text-left">
					<h1 class="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-12 text-blue">hang out with friends</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">since 2016</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue">
						i love my friends! since i joined hack club, i've gotten more opportunities to travel,
						which means more opportunities to make friends. i have lots of blog posts about hack
						club events and they feature my friends too :) <a
							href="/blog"
							class="text-blue italic underline hover:decoration-wavy">see here</a
						> <br /> i also love my hometown friends yall r cool #dayones
					</p>
				</div>
			</div>
			<!-- code -->
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row gap-6 lg:gap-14 reveal-section">
				<div
					class="flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-40 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
					<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
					<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
				</div>
				<div class="lg:mr-20 flex flex-col text-left">
					<h1 class="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-12 text-red">code</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">
						since march 2025 • <a
							href="https://github.com/ikealoverkat"
							class="text-blue underline hover:decoration-wavy">github</a
						>
					</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue">
						i am learning things... <br /> made a stupid game about aliens, an unfinished game that i
						put a lot of effort into but still didn't finish, a few hackathon projects, and a lot of websites.
						many hack club websites. and 2.5 personal websites. nice!
					</p>
				</div>
			</div>
			<!-- have hobbies -->
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row-reverse gap-6 lg:gap-14 reveal-section">
				<div
					class="lg:mr-20 flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-40 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
					<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
					<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
				</div>
				<div class="flex flex-col text-left">
					<h1 class="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-12 text-dark-pink">have hobbies</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">occasionally...</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue">
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
			<div class="ml-0 md:ml-12 flex flex-col lg:flex-row gap-6 lg:gap-14 reveal-section">
				<div
					class="flex w-full lg:min-w-7/16 flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 *:h-24 sm:*:h-32 lg:*:h-40 *:w-[45%] sm:*:w-[30%] lg:*:w-auto lg:*:flex-1 lg:*:min-w-0 *:object-cover *:outline *:outline-dark-blue"
				>
					<img src="/imgs/landing/intern-1.PNG" alt="intern group photo" />
					<img src="/imgs/landing/intern-2.jpg" alt="nice scenery" />
					<img src="/imgs/landing/intern-3.PNG" alt="athena team dinner" />
				</div>
				<div class="lg:mr-20 flex flex-col text-left">
					<h1 class="text-[28px] sm:text-[36px] lg:text-[48px] leading-tight lg:leading-12 font-bold text-dark-blue">LISTEN TO BEABADOOBEE</h1>
					<p class="mb-2 text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue italic">since june 2022</p>
					<p class="text-[18px] sm:text-[20px] lg:text-[24px] text-dark-blue break-words">
						I LOVE BEABADOOBEE <br />
						I GOT CONCERT TICKETS FOR PYLON OCT 7<br />
						YEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
					</p>
				</div>
			</div>
		</div>
		<!-- send a message -->
		<div
			class="reveal-section mx-4 sm:mx-10 my-16 sm:mt-36 w-auto sm:w-11/18 items-center justify-items-center justify-self-center bg-light-teal p-8 sm:p-12 md:p-18 text-center align-middle outline outline-blue drop-shadow-xl drop-shadow-black/25"
		>
			<h1 class="text-[32px] sm:text-[40px] md:text-[48px] text-dark-blue">send a message to kat</h1>
			<p class="text-[18px] sm:text-[24px] text-dark-blue">here are some preset options</p>
			<div class="m-4 sm:m-8 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
				<button class="message-button bg-pink">you have too many words on your website</button>
				<button class="message-button bg-light-yellow">fih ahh fih</button>
				<button class="message-button bg-[#b9cbfe]">No <br /> I am working</button>
			</div>
			<p class="text-[18px] sm:text-[24px] text-dark-blue">or you can</p>
			<input placeholder="write a message..." type="text" class="message-custom outline w-full sm:w-auto" />
			<input type="submit" value="cool!" class="message-submit outline" />
		</div>
	</div>
	<!-- footer -->
	<div class="items-center justify-center text-center p-10 sm:p-20 bg-white">
		<h2 class="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[28px] text-dark-blue">
			© kat wang 2026
			<br /> made with &lt;3 and <img src="/imgs/dietcoke.png" alt="diet coke" class="w-[18px] inline" />
		</h2>
		<h2 class="text-[14px] sm:text-[18px] text-dark-blue mt-4">
			vaguely inspired by <a
				href="dominicfike.com"
				target="_blank"
				class="text-blue underline hover:decoration-wavy">dominicfike.com</a
			>
		</h2>
	</div>
</div>