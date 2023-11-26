<script lang="ts">
	import BookIndex from './BookIndex.svelte';
	import ArticleItem from './ArticleItem.svelte';
	import BookTitle from './BookTitle.svelte';

	export let data;
	$: ({ articles, books } = data);
</script>

<BookIndex {books} />
<BookTitle {books} />

<ul>
	{#key books}
		{#each articles as article}
			<ArticleItem {article} />
		{/each}
	{/key}
</ul>
