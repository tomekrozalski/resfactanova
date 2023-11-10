<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faCircleHalfStroke as contractModeIcon,
		faTextSize as largeTextModeIcon
	} from '@fortawesome/pro-regular-svg-icons';
	import {
		faCircleHalfStroke as regularModeIcon,
		faTextSize as regularTextModeIcon
	} from '@fortawesome/pro-light-svg-icons';
	import Logo from './Logo.svelte';

	let isDarkMode = false;
	let isLargeFontMode = false;

	const toggleLargeFontMode = () => {
		isLargeFontMode = !isLargeFontMode;
	};

	const toggleDarkMode = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}

		isDarkMode = !isDarkMode;
	};
</script>

<header class="flex gap-8 p-5">
	<div class="flex items-center">
		<h1>
			<a href="/"><Logo /></a>
		</h1>
		<h2 class="w-28">
			<a
				href="/"
				class="text-gray-400 block px-6 py-4 font-serif font-normal transition-colors hover:text-black"
			>
				Teksty o&nbsp;muzyce współczesnej
			</a>
		</h2>
	</div>
	<div class="flex flex-grow justify-between">
		<div class="flex h-[58px] flex-grow items-center justify-center">
			<button
				class="mr-3 rounded bg-yellow p-2 text-sm transition-colors hover:bg-blue hover:text-white"
				on:click={toggleLargeFontMode}
				type="button"
				title="{isLargeFontMode ? 'Wyłącz' : 'Włącz'} duży rozmiar tekstu"
			>
				<Fa icon={isLargeFontMode ? regularTextModeIcon : largeTextModeIcon} size="2.5x" />
			</button>
			<button
				class="mr-3 rounded bg-yellow p-2 text-sm transition-colors hover:bg-blue hover:text-white"
				on:click={toggleDarkMode}
				type="button"
				title="{isDarkMode ? 'Wyłącz' : 'Włącz'} tryb wysokiego kontrastu"
			>
				<Fa icon={isDarkMode ? regularModeIcon : contractModeIcon} size="2.5x" />
			</button>
		</div>
		<div class="flex gap-4">
			<a href="http://www.pwm.com.pl/">
				<img alt="" class="h-[58px]" src="/images/pwm-edition.jpg" />
			</a>
			<a href="http://www.muzykologia.amu.edu.pl/">
				<img alt="" class="h-[55px]" src="/images/muzykologia.png" />
			</a>
		</div>
	</div>
</header>
