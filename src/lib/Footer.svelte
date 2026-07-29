<script lang="ts">
	const hover = new Audio('/sounds/hover2.wav');
	const click = new Audio('/sounds/click2.mp3');

	function playHover() {
		hover.currentTime = 0;
		hover.play();
	}

	function playClick() {
		click.currentTime = 0;
		click.play();
	}
</script>

<div class="items-center justify-center bg-white p-10 text-center sm:p-20">
	<h2 class="leading-6esm:leading-7-dark-blue text-[18px] sm:text-[24px]">
		© kat wang 2026
		<br /> made with &lt;3 and <img src="/imgs/dietcoke.png" alt="diet coke" class="inline w-4.5" />
	</h2>
	<h2 class="mt-4 text-[14px] text-dark-blue sm:text-[18px]">
		vaguely inspired by <a
			href="https://dominicfike.com"
			target="_blank"
			class="text-blue underline hover:decoration-wavy"
			onmouseenter={playHover}
			onclick={playClick}
			>dominicfike.com</a
		>
	</h2>
</div>
