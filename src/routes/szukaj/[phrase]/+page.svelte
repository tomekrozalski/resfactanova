<script lang="ts">
	import ArticleItem from '$lib/templates/ArticleItem/ArticleItem.svelte';

	export let data;
	$: ({ articles, phrase } = data);
</script>

<h3>Wyniki wyszukiwania dla frazy <strong>"{phrase}"</strong></h3>

{#if articles.length}
	<ul class="list-inside list-disc">
		{#each articles as article}
			<ArticleItem {article} />
		{/each}
	</ul>
{:else}
	Nic nie znaleziono. Spróbuj czegoś innego
{/if}
