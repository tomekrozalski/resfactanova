<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCircleHalfStroke as contractModeIcon } from '@fortawesome/pro-regular-svg-icons';
	import { faCircleHalfStroke as regularModeIcon } from '@fortawesome/pro-light-svg-icons';

	let isDarkMode = false;

	const toggleDarkMode = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}

		isDarkMode = !isDarkMode;
	};
</script>

<button
	class="mr-3 flex h-14 w-14 items-center justify-center rounded border-2 bg-yellow text-sm transition-colors hover:border-blue hover:bg-blue hover:text-white"
	class:border-blue={isDarkMode}
	class:border-yellow={!isDarkMode}
	on:click={toggleDarkMode}
	type="button"
	title="{isDarkMode ? 'Wyłącz' : 'Włącz'} tryb wysokiego kontrastu"
>
	<Fa icon={isDarkMode ? regularModeIcon : contractModeIcon} size="2.5x" />
</button>
