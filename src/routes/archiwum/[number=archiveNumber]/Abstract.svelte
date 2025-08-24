<script lang="ts">
	import { slide } from 'svelte/transition';
	import { marked } from 'marked';
	import Fa from 'svelte-fa';
	import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';

	export let abstract: string;
	let isAbstractVisible = false;
</script>

<button
	class="inline-flex items-center gap-1 text-red hover:underline"
	type="button"
	on:click={() => {
		isAbstractVisible = !isAbstractVisible;
	}}
>
	{#if isAbstractVisible}
		Schowaj abstrakt
	{:else}
		Zobacz abstrakt
	{/if}
	<Fa
		icon={faCaretDown}
		class={isAbstractVisible ? 'rotate-180 transition-transform' : 'transition-transform'}
	/>
</button>
{#if isAbstractVisible}
	<div class="" transition:slide>
		{@html marked.parse(abstract)}
	</div>
{/if}
