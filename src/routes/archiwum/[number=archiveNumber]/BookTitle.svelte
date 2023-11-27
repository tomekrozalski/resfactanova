<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBookmark } from '@fortawesome/pro-solid-svg-icons';
	import type { FormattedBookTypes } from './utils/Book';

	export let books: FormattedBookTypes[];
	$: active = books.find(({ isActive }) => isActive);
</script>

<h3>Archiwum <strong>Res Facta</strong> / <strong>Res Facta</strong> Archive</h3>

{#if active}
	<h4 class="flex items-center">
		<Fa icon={faBookmark} size="0.8x" class="mr-2 text-red" />
		Numer
		{#if active.resFactaNovaNumber}
			{active.resFactaNovaNumber} ({active.resFactaNumber}) {active.year}
		{:else}
			{active.resFactaNumber} ({active.year})
		{/if}
	</h4>
	{#if active.notes}
		<p>{active.notes}</p>
	{/if}
{/if}
