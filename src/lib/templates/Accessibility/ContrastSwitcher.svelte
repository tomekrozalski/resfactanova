<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCircleHalfStroke as contractModeIcon } from '@fortawesome/pro-regular-svg-icons';
	import { faCircleHalfStroke as regularModeIcon } from '@fortawesome/pro-light-svg-icons';
	import { isHighContrastMode } from '$lib/store';

	const toggleDarkMode = () => {
		if ($isHighContrastMode) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}

		$isHighContrastMode = !$isHighContrastMode;
	};
</script>

<button
	class="mr-3 flex h-14 w-14 items-center justify-center rounded border-2 bg-yellow text-sm transition-colors
		hover:border-blue hover:bg-blue hover:text-white
		focus-visible:rounded-none focus-visible:border-blue focus-visible:bg-blue focus-visible:text-white
		focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4"
	class:border-blue={$isHighContrastMode}
	class:border-yellow={!$isHighContrastMode}
	on:click={toggleDarkMode}
	type="button"
	title="{$isHighContrastMode ? 'Wyłącz' : 'Włącz'} tryb wysokiego kontrastu"
>
	<Fa icon={$isHighContrastMode ? regularModeIcon : contractModeIcon} size="2.5x" />
</button>
