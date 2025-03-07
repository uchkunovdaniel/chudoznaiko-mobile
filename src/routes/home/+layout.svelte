<script lang="ts">
    import home from '$lib/assets/home.svg';
    import profile from '$lib/assets/profile.svg';
    import search from '$lib/assets/search.svg';
    import video from '$lib/assets/video.svg';
    import game from '$lib/assets/game.svg';

    let { children } = $props();
</script>

<div class="w-screen h-20 bg-(--main) sticky top-0 z-50 mb-4"> </div>

<div class="w-screen h-20 bg-(--main) m-0 fixed bottom-0 flex justify-evenly z-50">
    <button onclick="{() => window.location.href='/home'}"><img src="{home}" alt="home"></button>
    <button onclick="{() => window.location.href = '/home/profile'}"><img src="{profile}" alt="profiile"></button>
    <button><img class="img" src="{search}" alt="search"></button>
    <button onclick="{() => window.location.href = '/home/games'}"><img class="img" src="{game}" alt="game"></button>
    <button onclick="{() => window.location.href = '/home/animations'}"><img class="img" src="{video}" alt="video"></button>
</div>

<style>
    :global(body){
        margin: 0;
        padding: 0;
        background: var(--bgcolor);
    }
    button{
        user-select: none;
        cursor: pointer;
    }
    .img{
        width: 50px;
        height: 50px;
        filter: invert()
    }
</style>

{@render children()}