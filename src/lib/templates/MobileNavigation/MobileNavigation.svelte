<script lang="ts">
	import { fly } from 'svelte/transition';
	import LargeFontSwitcher from '../Accessibility/LargeFontSwitcher.svelte';
	import ContrastSwitcher from '../Accessibility/ContrastSwitcher.svelte';
	import MobileNavigationButton from './MobileNavigationButton.svelte';
	import MobileNavigationItem from './MobileNavigationItem.svelte';

	let isNavigationOpened = false;
	let scrollPosition = 0;

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

<MobileNavigationButton on:click={toggleNavigation} />

{#if isNavigationOpened}
	<nav class="fixed inset-0 z-20 bg-white lg:hidden" transition:fly={{ x: '100vw', opacity: 100 }}>
		<ul class="bg-gray-800 mt-24">
			<MobileNavigationItem name="Aktualności" url="/" {toggleNavigation} />
			<MobileNavigationItem name="Pismo" url="/pismo" {toggleNavigation} />
			<MobileNavigationItem name="Dla Autorów" url="/wskazowki" {toggleNavigation} />
			<MobileNavigationItem name="Archiwum" url="/archiwum" {toggleNavigation} />
			<MobileNavigationItem name="Biblioteka" url="/biblioteka" {toggleNavigation} />
			<MobileNavigationItem name="In Memoriam" url="/in-memoriam" {toggleNavigation} />
			<MobileNavigationItem name="Redakcja" url="/redakcja" {toggleNavigation} />
			<MobileNavigationItem name="Kontakt" isLast url="/kontakt" {toggleNavigation} />
		</ul>
		<ul class="mt-5 p-5">
			<li class="mb-2 flex items-center"><LargeFontSwitcher /> duży rozmiar tekstu</li>
			<li class="flex items-center">
				<ContrastSwitcher /> tryb wysokiego kontrastu
			</li>
		</ul>
	</nav>
{/if}
