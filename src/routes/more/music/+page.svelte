<script lang="ts">
	import { onMount } from 'svelte';

	let { data } = $props();

	let hover: HTMLAudioElement;
	let hover2: HTMLAudioElement;
	let click: HTMLAudioElement;

	onMount(() => {
		hover = new Audio('/sounds/hover2.wav');
		hover2 = new Audio('/sounds/hover.mp3');
		click = new Audio('/sounds/click1.mp3');
	});

	function playHover() {
		hover.currentTime = 0;
		hover.play();
	}

	function playHover2() {
		hover2.currentTime = 0;
		hover2.play();
	}

	function playClick() {
		click.currentTime = 0;
		click.play();
	}
</script>

<main class="flex flex-col bg-linear-to-b from-cream to-light-blue p-12">
	<a
		onmouseenter={playHover}
		onclick={playClick}
		class="mb-6 text-xl text-dark-pink italic underline hover:decoration-wavy"
		href="/more">← back</a
	>
	<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-blue italic wrap-break-word">
		when im with U it feels like muuuuuuuuuusiiiiiiiiiicccccccccccccccccccc
	</h1>
	<p class="text-pretty text-lg md:text-xl lg:text-2xl text-dark-blue/75">*a reference to the underscores song, Music</p>
	<div class="flex flex-col gap-2">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div onmouseenter={playHover2} onclick={playClick} class="music-container">
			<h1 class="mb-4 text-lg md:text-xl lg:text-2xl text-dark-blue italic">beabadoobee my favourite artist ever</h1>
			<iframe
				title="beabadoobee"
				data-testid="embed-iframe"
				style="border-radius:12px"
				src="https://open.spotify.com/embed/artist/35l9BRT7MXmM8bv2WDQiyB?utm_source=generator"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</div>
		<h2 class="m-4 self-center text-center text-3xl text-dark-pink italic">favourite songs rn</h2>
		<div class="flex flex-wrap justify-center">
			<div class="music-container-2">
				<iframe
					title="ever seen"
					data-testid="embed-iframe"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/track/505HhtdgN8lynQcJQCcIiD?utm_source=generator"
					height="352"
					width="100%"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div onmouseenter={playHover2} onclick={playClick} class="music-container-2">
				<iframe
					title="aint in la"
					data-testid="embed-iframe"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/track/02HyFYmpzt02VJ8k0CqxKj?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div onmouseenter={playHover2} onclick={playClick} class="music-container-2">
				<iframe
					title="card declined"
					data-testid="embed-iframe"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/track/3vFRHL7DuN076fdIQuWQfv?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div onmouseenter={playHover2} onclick={playClick} class="music-container-2">
				<iframe
					title="designated driver"
					data-testid="embed-iframe"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/track/3YJ6sHSqgzn5VLgRiViNtD?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div onmouseenter={playHover2} onclick={playClick} class="music-container-2">
				<iframe
					title="house that always rains"
					data-testid="embed-iframe"
					style="border-radius:12px"
					src="https://open.spotify.com/embed/track/1b6l3C0O4BGe0SivPwfoRH?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
		</div>
	</div>
</main>
