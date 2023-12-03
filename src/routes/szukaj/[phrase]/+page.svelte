<script lang="ts">
	import ArticleItem from '$lib/templates/ArticleItem/ArticleItem.svelte';

	export let data;
	$: ({ articles, phrase } = data);
</script>

<h3 class="mb-6 font-serif text-xl font-bold text-black">
	Wyniki wyszukiwania dla frazy <strong>"{phrase}"</strong>
</h3>

{#if articles.length}
	{#key articles}
		<ul class="list-inside list-disc">
			{#each articles as article}
				<ArticleItem {article} />
			{/each}
		</ul>
	{/key}
{:else}
	Nic nie znaleziono. Spróbuj czegoś innego
{/if}
