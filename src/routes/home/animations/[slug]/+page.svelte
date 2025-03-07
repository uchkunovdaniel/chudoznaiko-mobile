<script lang="ts">
    let { data } = $props();
</script>

<video class="w-11/12 h-fit rounded-md m-auto " controls src="{data.video}">
    <track src="" kind="captions">
</video>

<div class="flex w-screen h-2 bg-(--main) mt-10"></div>

<p class="font-transforma_light text-2xl text-justify p-3">{data.description}</p>