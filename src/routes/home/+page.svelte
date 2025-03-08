<!--&lt;!&ndash;https://www.figma.com/design/lxYFrD9WJLbD7kfpcpwgsl/noit?node-id=423-2711&t=gBBQhP4NngwWsICv-4&ndash;&gt;-->

<script lang="ts">
    import video from '$lib/assets/video.svg';
    import game from '$lib/assets/game.svg';

    let { data } = $props();
</script>

<h1 class="font-transforma text-white text-3xl fixed top-5 left-5 z-[52]">Здравей!</h1>

<div class="flex w-screen h-[40vh] flex-col">
    <div class="w-1/2 h-fit font-transforma text-2xl m-4 flex justify-evenly items-center">
        <div class="bg-(--accent) flex justify-center items-center border-4 rounded-full border-(--accent) w-12 h-12">
            <img class="w-8 h-8 " src="{video}" alt="video">
        </div>
        <h1>Анимации</h1>
    </div>
    <div class="flex w-screen h-fit justify-evenly flex-row items-center flex-wrap gap-1">
        {#each data.animations.slice(0,2) as animation, i}
            <div>
                <button onclick={() => {window.location.href = `/home/animations/${animation.video[0]}`}} aria-label={animation.video[0]}>
                    <img class="w-48 h-30 cursor-pointer rounded-md" src={data.thumbnailsa[i]} alt="animation">
                </button>
            </div>
        {/each}
    </div>
    <a href="/home/animations" class="font-transforma text-2xl relative right-[-60vw] mt-4 w-fit">Виж още ></a>
</div>

<div class="flex w-screen h-2 bg-(--main)"></div>

<div class="flex w-screen flex-col">
    <div class="w-1/2 h-fit font-transforma text-2xl m-4 flex justify-evenly items-center">
        <div class="bg-(--accent) flex justify-center items-center border-4 rounded-full border-(--accent) w-12 h-12">
            <img class="w-8 h-8 " src="{game}" alt="video">
        </div>
        <h1> Видео игри</h1>
    </div>
    <div class="flex w-screen h-fit justify-evenly flex-row items-center flex-wrap gap-1">
        {#each data.animations.slice(0,2) as animation, i}
            <div>
                <button onclick={() => {window.location.href = `/home/animations/${animation.video[0]}`}} aria-label={animation.video[0]}>
                    <img class="w-48 h-30 cursor-pointer rounded-md" src={data.thumbnailsa[i]} alt="animation">
                </button>
            </div>
        {/each}
    </div>
    <a href="/home/games" class="font-transforma text-2xl relative right-[-60vw] mt-4 w-fit">Виж още ></a>
</div>