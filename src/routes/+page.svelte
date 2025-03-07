<script lang="ts">
    import logo from '$lib/assets/logo.svg';
    import Login from '$lib/components/login.svelte';

    let visible = $state(false);

    function showLogin(){
        if (!visible){
            visible = true;
            document.getElementById('text')?.setAttribute('style', 'visibility: hidden');
        }
        else{
            visible = false;
            document.getElementById('text')?.setAttribute('style', 'visibility: visible');
        }
    }
</script>

<div id="text" class="flex w-screen justify-center items-center flex-col absolute top-1/2 transform -translate-y-1/2">
    <img src="{logo}" alt="logo" class="w-11/12">
    <h2 class="font-transforma-mix text-white text-xl text-center">Интерактивна платформа за обучение</h2>
    <button onclick="{showLogin}" class="bg-white w-40 h-10 rounded-md font-transforma btn-shadow mt-10">Да започнем</button>
</div>

{#if visible}
    <Login {showLogin} />
{/if}

<style>
    :global(body){
        background: var(--accent) url("/src/lib/assets/bg.svg") no-repeat center center/cover;
    }
</style>