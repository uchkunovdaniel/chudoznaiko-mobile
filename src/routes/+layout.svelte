<script lang="ts">
	import '../app.css';
    import '../fonts.css';

    let { children } = $props();
</script>

{@render children()}

<style>
    :global(:root){
      --main: #9438FE;
      --bgcolor: #fde7fe;
	  --accent: #99AAFE;
      --second-purple: #7F5BFF;
	}
	:global(html) {
      /*overflow: hidden;*/
      height: 100%;
      width: 100%;
      scroll-behavior: smooth;
      position: relative;
  }
    :global(body){
        margin: 0;
        padding: 0;
    }
</style>