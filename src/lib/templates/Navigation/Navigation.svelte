<script lang="ts">
	import { page } from '$app/stores';
	import NavigationItem from './NavigationItem.svelte';
	import Search from './Search.svelte';
	import RandomArticle from './RandomArticle.svelte';

	const pages = $page.data.pages;
</script>

<nav class="hidden flex-col pl-5 font-serif text-base lg:flex">
	<ul class="mb-4 rounded-l-lg bg-gray-800 pb-2">
		{#each pages as { menuName, slug }, index}
			<NavigationItem name={menuName} url={slug} isLast={pages.length === index + 1} />
		{/each}
	</ul>
	<Search />
	<RandomArticle />
	<div class="mb-12 flex-grow border-r border-dashed border-gray-800" />
</nav>
