<script lang="ts">
    import close from '$lib/assets/close.svg';
    import Login from './login.svelte';
    import { enhance } from '$app/forms';

    let { showLogin } = $props();
    let login = $state(false);
</script>

{#if login}
    <Login {showLogin} />
{:else}
    <div class="w-3/4 h-1/2 bg-(--main) fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl flex flex-col justify-center items-center">
        <button class="absolute top-2 right-2 bg-pink" onclick="{showLogin}">
            <img class="w-4 h-4" src="{close}" alt="close"/>
        </button>
        <h1 class="text-white font-transforma text-2xl top-2 fixed">Регистрирай се</h1>
        <form action="?/register" method="POST" use:enhance class="flex flex-col justify-center items-center gap-4">
            <input type="text" placeholder="Потребителско име" class="w-60 h-10 rounded-md bg-white p-4">
            <input type="password" placeholder="Парола" class="w-60 h-10 rounded-md bg-white p-4">
            <input type="password" placeholder="Потвърди Парола" class="w-60 h-10 rounded-md bg-white p-4">
            <button type="submit" class="bg-white w-40 h-10 rounded-md font-transforma btn-shadow">Регистрация</button>
        </form>
        <button onclick="{() => {login = true}}" class="font-transforma-light font-medium fixed bottom-4 right-4 text-white text-xl"><b>Влез</b></button>

    </div>
{/if}
