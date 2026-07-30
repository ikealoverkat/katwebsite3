<script lang="ts">
    let drawings = Object.values(import.meta.glob('$lib/assets/drawings/*', {
		query: '?url',
        eager: true,
        import: 'default'
    }))
</script>

<div class="flex flex-col">
	<a class="mx-12 my-6 text-xl text-teal italic underline hover:decoration-wavy" href="/more"
		>← back</a
	>
    <h2 class="text-3xl md:text-4xl lg:text-5xl text-dark-pink m-4 p-4 text-center">my drawings & design work (in no particular order)
    </h2>
    <div class="w-full xl:w-2/3 m-12 flex flex-wrap h-full gap-6 justify-center items-center self-center">
        {#each drawings as drawing}
            <img src={drawing} alt="" class="w-100 outline-blue/50 outline-1">
        {/each}
    </div>
</div>