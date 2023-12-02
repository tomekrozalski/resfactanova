<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
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

	const pages = $page.data.pages;
</script>

<MobileNavigationButton on:click={toggleNavigation} />

{#if isNavigationOpened}
	<nav
		class="fixed inset-0 z-20 overflow-y-scroll bg-white lg:hidden"
		transition:fly={{ x: '100vw', opacity: 100 }}
	>
		<ul class="mt-24 bg-gray-800">
			{#each pages as { menuName, slug }, index}
				<MobileNavigationItem
					name={menuName}
					url={slug}
					isLast={pages.length === index + 1}
					{toggleNavigation}
				/>
			{/each}
		</ul>
		<ul class="my-5 p-5">
			<li class="mb-2 flex items-center"><LargeFontSwitcher /> duży rozmiar tekstu</li>
			<li class="flex items-center">
				<ContrastSwitcher /> tryb wysokiego kontrastu
			</li>
		</ul>
	</nav>
{/if}
