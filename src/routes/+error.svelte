<script lang="ts">
    import {page} from '$app/state';
</script>

<div class="bg-linear-t-b from-cream to-white flex flex-col gap-2 justify-center items-center text-center">
    <h1 class="text-6xl text-dark-pink">{page.status}</h1>
    <h2 class="text-2xl text-teal italic">{page.error?.message}</h2>
</div>