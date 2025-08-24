<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFilePdf } from '@fortawesome/pro-solid-svg-icons';
	import type { FormattedArticleTypes } from './Article.d';

	export let article: FormattedArticleTypes;
	const { authors, book, pdf, title } = article;
</script>

<li>
	{#if book.isResFactaNova}
		Res Facta Nova,
	{:else}
		Res Facta,
	{/if}
	<a href="/archiwum/{book.resFactaNumber}">
		numer {book.resFactaNumber}
		{#if book.isResFactaNova}
			({book.resFactaNovaNumber}) {book.year}:
		{:else}
			({book.year}):
		{/if}
	</a>
	{#if authors}
		{#each authors as { fullName, slug }, index}
			<a href="/autor/{slug}">{fullName}</a>{#if authors.length > 1 && index + 1 !== authors.length}
				,{' '}
			{/if}
		{/each}
	{/if}
	{#if pdf}
		<a href={pdf}>{title} <Fa icon={faFilePdf} size="0.8x" class="inline-block" /></a>
	{:else}
		{title}
	{/if}
</li>
