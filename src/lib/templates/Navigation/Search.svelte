<script lang="ts">
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons';
</script>

<form class="bg-gray-900 border-gray-800 mb-4 rounded-l-lg border px-4 pb-2 pt-3 text-sm">
	<label for="search" class="">Wyszukiwarka</label>
	<div class="relative my-2">
		<input
			id="search"
			type="text"
			class="border-gray-800 focus:border-gray-600 peer w-full rounded border px-2 py-1 text-sm focus:outline-none focus-visible:rounded-none focus-visible:outline-none
			focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-black dark:p-3"
		/>
		<button
			aria-label="Rozpocznij wyszukiwanie"
			type="submit"
			class="text-gray-400 absolute bottom-0 right-0 top-0 px-3 focus-visible:text-black focus-visible:outline-none
			 focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 peer-focus:text-black dark:px-3"
		>
			<Fa icon={faMagnifyingGlass} />
		</button>
	</div>
</form>

<style>
	:global(.enlarge) input {
		padding: theme('spacing.3');
	}

	:global(.enlarge) button {
		padding-inline: theme('spacing.4');
	}
</style>
