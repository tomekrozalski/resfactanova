<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFilePdf } from '@fortawesome/pro-solid-svg-icons';

	export let article;
	const { abstract, authors, pdf, title } = article;
</script>

<li class="list-inside list-disc">
	{#if authors?.length}
		{#each authors as { fullName, slug }, index}
			<a href="/autor/{slug}">{fullName}</a>{#if authors.length > 1 && index + 1 !== authors.length}
				,{' '}
			{/if}
		{/each}
	{/if}{#if pdf}
		<a href={pdf}>{title} <Fa icon={faFilePdf} size="0.8x" class="inline-block" /></a>
	{:else}{title}{/if}
</li>
