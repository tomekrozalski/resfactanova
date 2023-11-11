<script lang="ts">
	import NavigationItem from './NavigationItem.svelte';
	import Search from './Search.svelte';
	import RandomArticle from './RandomArticle.svelte';
</script>

<nav class="hidden flex-col pl-5 font-serif text-base lg:flex">
	<ul class="bg-gray-800 mb-4 rounded-l-lg pb-2">
		<NavigationItem name="Aktualności" url="/" />
		<NavigationItem name="Pismo" url="/pismo" />
		<NavigationItem name="Dla Autorów" url="/wskazowki" />
		<NavigationItem name="Archiwum" url="/archiwum" />
		<NavigationItem name="Biblioteka" url="/biblioteka" />
		<NavigationItem name="In Memoriam" url="/in-memoriam" />
		<NavigationItem name="Redakcja" url="/redakcja" />
		<NavigationItem name="Kontakt" isLast url="/kontakt" />
	</ul>
	<Search />
	<RandomArticle />
	<div class="border-gray-800 mb-12 flex-grow border-r border-dashed" />
</nav>
