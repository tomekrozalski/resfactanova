<script lang="ts">
	import ArticleItem from '$lib/templates/ArticleItem/ArticleItem.svelte';

	export let data;
	$: ({ articles, author } = data);
</script>

<h3>{author.firstName} {author.lastName}</h3>

{#if author.notes}
	<p>{author.notes}</p>
{/if}

<ul class="list-inside list-disc">
	{#each articles as article}
		<ArticleItem {article} />
	{/each}
</ul>
