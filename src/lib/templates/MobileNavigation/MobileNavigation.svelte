<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/pro-solid-svg-icons';
	import MobileNavigationItem from './MobileNavigationItem.svelte';

	let isNavigationOpened = false;
	let scrollPosition = 0;
	let y = 0;

	$: isInversed = y > 100;

	const toggleNavigation = () => {
		if (isNavigationOpened) {
			document.body.style.position = '';
			document.body.style.overflow = '';
			window.scrollTo(0, scrollPosition);

			isNavigationOpened = false;
		} else {
			scrollPosition = window.pageYOffset;

			document.body.style.position = 'fixed';
			document.body.style.top = -scrollPosition + 'px';
			document.body.style.overflow = 'hidden';

			isNavigationOpened = true;
		}
	};
</script>

<svelte:window bind:scrollY={y} />

<button
	type="button"
	on:click={toggleNavigation}
	class="fixed right-2 top-2 z-30 flex items-center rounded p-4 lg:hidden"
	class:bg-black={isInversed}
	class:text-white={isInversed}
	class:bg-white={!isInversed}
	class:text-black={!isInversed}
>
	<Fa icon={faBars} size="2x" />
</button>

{#if isNavigationOpened}
	<nav class="fixed inset-0 z-20 bg-white">
		<ul class="bg-gray-800 mt-24 pb-2">
			<MobileNavigationItem name="Aktualności" url="/" />
			<MobileNavigationItem name="Pismo" url="/pismo" />
			<MobileNavigationItem name="Dla Autorów" url="/wskazowki" />
			<MobileNavigationItem name="Archiwum" url="/archiwum" />
			<MobileNavigationItem name="Biblioteka" url="/biblioteka" />
			<MobileNavigationItem name="In Memoriam" url="/in-memoriam" />
			<MobileNavigationItem name="Redakcja" url="/redakcja" />
			<MobileNavigationItem name="Kontakt" isLast url="/kontakt" />
		</ul>
	</nav>
{/if}
