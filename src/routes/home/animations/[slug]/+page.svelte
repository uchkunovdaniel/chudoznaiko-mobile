<script lang="ts">
    let { data } = $props();
</script>

<video controls src="{data.video}">
    <track src="" kind="captions">
</video>