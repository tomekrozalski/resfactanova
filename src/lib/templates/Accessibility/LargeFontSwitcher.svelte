<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTextSize as largeTextModeIcon } from '@fortawesome/pro-regular-svg-icons';
	import { faTextSize as regularTextModeIcon } from '@fortawesome/pro-light-svg-icons';
	import { isLargeTextMode } from '$lib/store';

	const toggleLargeFontMode = () => {
		if ($isLargeTextMode) {
			document.documentElement.classList.remove('enlarge');
		} else {
			document.documentElement.classList.add('enlarge');
		}

		$isLargeTextMode = !$isLargeTextMode;
	};
</script>

<button
	class="mr-3 flex h-14 w-14 items-center justify-center rounded border-2 bg-yellow text-sm transition-colors hover:border-blue hover:bg-blue hover:text-white"
	class:border-blue={$isLargeTextMode}
	class:border-yellow={!$isLargeTextMode}
	on:click={toggleLargeFontMode}
	type="button"
	title="{$isLargeTextMode ? 'Wyłącz' : 'Włącz'} duży rozmiar tekstu"
>
	<Fa icon={$isLargeTextMode ? regularTextModeIcon : largeTextModeIcon} size="2x" />
</button>
