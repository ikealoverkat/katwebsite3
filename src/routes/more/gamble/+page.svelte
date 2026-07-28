<script lang="ts">
	let gamble: string = 'click me';
</script>

<main class="flex flex-col bg-linear-to-b from-cream to-white">
	<a class="mx-12 my-6 text-xl text-dark-pink italic underline hover:decoration-wavy" href="/more"
		>← back</a
	>
	<div class="m-8">
		<h1 class="text-center text-6xl text-blue">magic 7 ball</h1>
		<p class="text-center text-lg text-dark-blue/75 italic">
			it's a 7 ball because 7 is my favourite number and this is my website
		</p>
		<p class="text-center text-lg text-dark-blue/75 italic">
			think of a question and recieve an unhelpful answer!
		</p>
	</div>
	<button
		class="m-12 h-75 w-75 self-center bg-[url('/imgs/ball.png')] bg-contain lg:h-100 lg:w-100"
	>
		<h1 class="mb-8 text-4xl text-white">{gamble}</h1>
	</button>
</main>
