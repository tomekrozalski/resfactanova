<script lang="ts">
	import getTitle from './utils/getTitle';
	import BookIndex from './BookIndex.svelte';
	import ArticleItem from './ArticleItem.svelte';
	import BookTitle from './BookTitle.svelte';

	export let data;
	$: ({ articles, books, title } = data);
</script>

<svelte:head>
	<title>{getTitle(title, books)}</title>
</svelte:head>

<BookIndex {books} />
<BookTitle {books} />

<ul>
	{#key books}
		{#each articles as article}
			<ArticleItem {article} />
		{/each}
	{/key}
</ul>
