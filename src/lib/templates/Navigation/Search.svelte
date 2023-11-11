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
			class="border-gray-800 focus:border-gray-600 peer w-full rounded border px-2 py-1 focus:outline-none dark:border-black"
		/>
		<button
			aria-label="Rozpocznij wyszukiwanie"
			type="submit"
			class="text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 p-2 pr-3 peer-focus:text-black"
		>
			<Fa icon={faMagnifyingGlass} />
		</button>
	</div>
</form>
