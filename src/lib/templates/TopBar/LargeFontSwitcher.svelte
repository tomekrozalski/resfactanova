<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTextSize as largeTextModeIcon } from '@fortawesome/pro-regular-svg-icons';
	import { faTextSize as regularTextModeIcon } from '@fortawesome/pro-light-svg-icons';

	let isLargeFontMode = false;

	const toggleLargeFontMode = () => {
		if (isLargeFontMode) {
			document.documentElement.classList.remove('enlarge');
		} else {
			document.documentElement.classList.add('enlarge');
		}

		isLargeFontMode = !isLargeFontMode;
	};
</script>

<button
	class="mr-3 flex h-14 w-14 items-center justify-center rounded border-2 bg-yellow text-sm transition-colors hover:border-blue hover:bg-blue hover:text-white"
	class:border-blue={isLargeFontMode}
	class:border-yellow={!isLargeFontMode}
	on:click={toggleLargeFontMode}
	type="button"
	title="{isLargeFontMode ? 'Wyłącz' : 'Włącz'} duży rozmiar tekstu"
>
	<Fa icon={isLargeFontMode ? regularTextModeIcon : largeTextModeIcon} size="2x" />
</button>
