<script lang="ts">
    import { enhance } from "$app/forms";

    let Search: string = $state('');
</script>


<form id="searchform" action="/home?/search" method="post" use:enhance>
		<input type="text" id="search" class="cursor-text right-[-3vw] relative text-[#373737] bg-(--bgcolor) px-2 select-none items-center w-11/12 h-fit rounded-md font-transforma-light text-5xl" placeholder="Търсене" bind:value={Search} autocomplete="off" name="search"/>
</form>

<style>
			#searc{
				background: var(--bgcolor);
				color: #373737;
				/*margin-left: 8vw;*/
				position: relative;
				right: -3vw;
				cursor: text;
		}
</style>