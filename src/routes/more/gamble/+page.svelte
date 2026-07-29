<script lang="ts">
	let gamble: string = $state('click & hold');
	let gambleNumber: number = 0;
	import { onMount } from 'svelte';

	let hover: HTMLAudioElement;
	let click: HTMLAudioElement;
	let shake: HTMLAudioElement;
	let celebrate: HTMLAudioElement;

	onMount(() => {
		hover = new Audio('/sounds/hover.mp3');
		click = new Audio('/sounds/click1.mp3');
		shake = new Audio('/sounds/shake.mp3');
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

	function playShake() {
		if (!shake) return;
		shake.currentTime = 0;
		shake.play();
	}

	const ballOptions = [
		'it is certain',
		'it is crunch (like the alien from my dumb game)',
		'perchance',
		'yes definitely',
		'yes but only if you stream beabadoobee',
		'as i see it, yes',
		'most likely',
		'outlook good',
		'yes',
		'signs point to yes',
		'a person who thinks all the time has nothing to think about except thoughts',
		'relaxing question mark?',
		'reply hazy, try again later',
		"No I'm Working",
		'du bist gut genug',
		'about as likely as justin bieber turning chinese',
		'about as likely as max 1mon turning chinese',
		'about as likely as ivie turning chinese',
		'about as likely as stelle turning chinese',
		'about as likely as jenin turning chinese',
		'about as likely as shurui turning chinese... wait a min',		
		'concentrate and ask again',
		'ascension.hackclub.com',
		"don't count on it",
		'great question!',
		'no (source: trust me bro)',
		'very doubtful',
		'NO',
		'outlook not so good',
		'贾斯汀比伯'
	];

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function gambleNow() {
		gambleNumber = getRandomInt(0, ballOptions.length - 1);
		gamble = ballOptions[gambleNumber];
	}
</script>

<main class="flex flex-col bg-linear-to-b from-cream to-white">
	<a class="mx-12 my-6 text-xl text-dark-pink italic underline hover:decoration-wavy" href="/more"
		>← back</a
	>
	<div class="m-8">
		<h1 class="text-center text-6xl text-blue">magic 7 ball</h1>
		<p class="text-center text-lg text-dark-blue/75 italic">
			it's a 7 ball because 7 is my favourite number and this is my website.
		</p>
		<p class="text-center text-lg text-dark-blue/75 italic">
			think of a question and recieve an unhelpful answer!
		</p>
	</div>
	<button
		class="ball m-12 h-75 w-75 self-center bg-[url('/imgs/ball.png')] bg-contain lg:h-100 lg:w-100"
		onmousedown={playShake} onclick={gambleNow}
	>
		<h1 class="mb-8 max-w-1/2 mx-auto text-xl text-blue">{gamble}</h1>
	</button>
</main>
