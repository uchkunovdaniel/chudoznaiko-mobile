<script lang="ts">
    import profile from '$lib/assets/profile.svg';

    let { data } = $props();
</script>

<h1 class="font-transforma text-white text-3xl fixed top-5 left-5 z-[52]">Здравей!</h1>

<img class="w-1/2 mx-auto bg-(--main) rounded-xl mt-20" src="{profile}" alt="profile">

<p class="font-transforma text-xl text-center mt-5">{data.user.email}</p>

<div class="flex w-screen h-2 bg-(--main) mt-10"></div>

<div>
    <h1 class="font-transforma text-3xl mt-8 ml-8">Значки</h1>
    <div class="flex flex-wrap justify-center">
        {data.user.badge ? data.user.badge.image : 'Нямате значки'}
        {#each data.user.badge as badge}
            {badge}
        {/each}
    </div>
</div>

<form class="flex justify-center" action="/home?/logout" method="post">
    <button class="font-transforma text-white bg-(--main) rounded-md px-5 py-2 mt-40 w-30"  >Изход</button>
</form>