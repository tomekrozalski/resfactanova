<script lang="ts">
	export let data;

	$: ({ content, title } = data);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{@html content}
