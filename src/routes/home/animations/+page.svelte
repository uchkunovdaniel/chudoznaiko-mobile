<script lang="ts">
    let { data } = $props();
</script>

<h1 class="font-transforma text-3xl text-white fixed top-5 left-5 z-[51]">Aнимации</h1>

<div class="overflow-y-scroll w-screen h-screen flex justify-center items-center flex-col gap-4 mb-10">
    {#each data.animations as animation, i}
        <button class="w-11/12 h-fit flex justify-center" onclick={() => {window.location.href = `/home/animations/${animation.video[0]}`}} aria-label={animation.video[0]}>
            <img class="rounded-md w-11/12" src={data.thumbnails[i]} alt="animation">
        </button>
    {/each}
</div>