<script lang="ts">
	import Contact from "$lib/Contact.svelte";

</script>

<main class="flex flex-col gap-2 bg-linear-to-b from-cream to-white">
	<div class="m-6 items-center justify-center self-center text-center">
		<h1 class="text-[128px] text-dark-pink">other things</h1>
		<h3 class="text-[32px] leading-0 text-teal">loooooooooooooots of things</h3>
	</div>
	<div class="flex flex-row justify-center gap-16 self-center">
		<div>
			<h2 class="text-[48px] text-dark-blue underline">more about me</h2>
			<p class="text-[20px] leading-4 text-dark-blue/75">chinese-canadian • she/her</p>
			<p class="my-4 text-[24px] text-dark-blue">
				i am currently in <b>ottawa.</b> if you are too, let's hang out! [<a
					href="placeholder"
					class="text-blue underline hover:decoration-wavy">book here</a
				>]
			</p>
			<!-- likes n dislikes -->
            <div class="my-4 text-[24px]">
				<p class="text-dark-pink">likes</p>
				<ul class="text-dark-blue m-2">
					<li>• cats</li>
					<li>• water & marine life</li>
					<li>• making friends</li>
					<li class="inline-flex gap-2 items-center">
						• asian food<img
							src="https://i.postimg.cc/xCrkZXQk/image.png"
							alt="drool emoji"
							class="h-7 w-7"
						/>
					</li>
				</ul>
				<p class="text-red">dislikes</p>
				<ul class="text-dark-blue">
                    <li>• pineapples</li>
                    <li>• mean people</li>
                    <li>• being too serious (evident from this website...)</li>
                </ul>
			</div>
            <div class="inline-flex gap-6 items-center text-[24px] text-dark-blue underline">
                reach out online here:
                <Contact width="30px" height="30px" />
            </div>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 outline">
            <div class="more-box">
                <h2 class="text-blue text-[48px]">MUSIC</h2>
            </div>
            <div class="more-box">
                <h2 class="text-teal text-[32px]">digital collectibles</h2>
            </div>
            <div class="more-box">
                <h2 class="text-blue text-[32px]">777luckykat?</h2>
            </div>                        
            <div class="drawings">
                <h2 class="text-red text-[48px]">drawings</h2>
            </div>                  
        </div>
	</div>
</main>
