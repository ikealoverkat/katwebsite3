<script>
	const hover = new Audio('/sounds/hover2.wav');
	const click = new Audio('/sounds/click1.mp3');

	function playHover() {
		hover.currentTime = 0;
		hover.play();
	}

	function playClick() {
		click.currentTime = 0;
		click.play();
	}
</script>

<div
	class="sticky top-0 z-10 mx-4 mt-4 flex flex-wrap items-center justify-between gap-2 bg-cream/75 px-4 py-4 text-[16px] backdrop-blur-md sm:mx-8 sm:text-[20px] md:text-[24px]"
>
	<div class="flex flex-row gap-4 text-dark-blue *:decoration-wavy *:hover:underline sm:gap-6">
		<a href="/" onclick={playClick} onmouseenter={playHover}>home</a>
		<a href="/blog" onclick={playClick} onmouseenter={playHover}>blog</a>
		<a href="/more" onclick={playClick} onmouseenter={playHover}>etc</a>
	</div>
	<h2 class="text-[14px] text-teal sm:text-[20px] md:text-[24px]">
		graphic design is my passion!!!!!!
	</h2>
</div>
