<script lang="ts">
    let { data } = $props();
</script>

<h1 class="font-transforma text-3xl text-white fixed top-5 left-5 z-[51]">Видео игри</h1>

<div class="overflow-y-scroll w-screen h-screen flex justify-start items-center flex-col gap-5 pb-24">
    {#each data.games as game, i}
        <button class="w-11/12 h-fit flex justify-center" onclick={() => {window.location.href = `/home/games/${game.video[0]}`}} aria-label="game">
            <img class="rounded-md w-11/12" src={data.thumbnails[i]} alt="game">
        </button>
    {/each}
</div>
