<script lang="ts">
	import { goto } from '$app/navigation';
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons';

	let value = '';
</script>

<form
	class="mb-4 rounded-l-lg border border-gray-800 bg-gray-900 px-4 pb-2 pt-3 text-sm"
	action="/szukaj"
	method="POST"
	on:submit|preventDefault={() => goto('/szukaj/' + value)}
>
	<label for="search" class="">Wyszukiwarka</label>
	<div class="relative my-2">
		<input
			id="search"
			name="search"
			type="text"
			class="peer w-full rounded border border-gray-800 px-2 py-1 text-sm focus:border-gray-600 focus:outline-none focus-visible:rounded-none focus-visible:outline-none
			focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-black dark:p-3"
			bind:value
		/>
		<button
			aria-label="Rozpocznij wyszukiwanie"
			type="submit"
			class="absolute bottom-0 right-0 top-0 px-3 text-gray-400 focus-visible:text-black focus-visible:outline-none
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
