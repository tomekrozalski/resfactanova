<script lang="ts">
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faDownload } from '@fortawesome/pro-regular-svg-icons';
	import type { FormattedArticleTypes } from '$lib/templates/ArticleItem/Article.d';

	const randomArticle = $page?.data?.randomArticle as FormattedArticleTypes | null;
</script>

{#if randomArticle}
	{@const { authors, book, pdf, title } = randomArticle}
	<a
		href={pdf ?? '/'}
		class="group relative mb-10 block rounded-l-lg border border-gray-800 bg-gray-900 px-4 pb-5 pt-3 text-sm text-gray-200
   transition-colors hover:bg-blue hover:text-white
	 focus:outline-none focus-visible:rounded-none focus-visible:bg-blue focus-visible:text-white focus-visible:ring-4
	 focus-visible:ring-black focus-visible:ring-offset-4"
	>
		{#if authors}
			<div>{authors?.map(({ fullName }) => fullName).join(', ')}</div>
		{/if}
		<div class=" line-clamp-2 text-base font-medium">{title}</div>
		<div class="flex justify-between">
			Numer
			{#if book.isResFactaNova}
				{book.resFactaNovaNumber} ({book.resFactaNumber}) {book.year}
			{:else}
				{book.resFactaNumber} ({book.year})
			{/if}
			<Fa
				icon={faDownload}
				size="1.5x"
				class="absolute bottom-2 right-3
				text-blue transition-colors group-hover:text-white group-focus-visible:text-white"
			/>
		</div>
	</a>
{/if}
