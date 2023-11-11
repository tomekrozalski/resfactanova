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
	class="mr-3 rounded border-2 bg-yellow p-2 text-sm transition-colors hover:bg-blue hover:text-white"
	class:border-blue={isLargeFontMode}
	class:border-yellow={!isLargeFontMode}
	on:click={toggleLargeFontMode}
	type="button"
	title="{isLargeFontMode ? 'Wyłącz' : 'Włącz'} duży rozmiar tekstu"
>
	<Fa icon={isLargeFontMode ? regularTextModeIcon : largeTextModeIcon} size="2.5x" />
</button>
