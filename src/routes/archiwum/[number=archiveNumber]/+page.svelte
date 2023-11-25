<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBookmark } from '@fortawesome/pro-solid-svg-icons';

	export let data;
	$: ({ articles, books } = data);
	$: active = books.find(({ isActive }) => isActive);
</script>

<h3>
	Archiwum <strong>indeks numerów</strong> / Archive <strong>index of the journal volumes</strong>
</h3>

<div class="flex gap-5">
	<ul class="list-inside list-disc">
		{#each books.filter(({ resFactaNovaNumber }) => !resFactaNovaNumber) as { isActive, resFactaNumber, year }}
			<li>
				Res Facta
				<a
					class="whitespace-nowrap"
					class:font-bold={isActive}
					href="/archiwum/{resFactaNumber}"
					data-sveltekit-noscroll
				>
					Numer {resFactaNumber} ({year})
				</a>
			</li>
		{/each}
	</ul>
	<ul class="list-inside list-disc">
		{#each books.filter(({ resFactaNovaNumber }) => resFactaNovaNumber) as { isActive, resFactaNovaNumber, resFactaNumber, year }}
			<li>
				Res Facta Nova
				<a
					class="whitespace-nowrap"
					class:font-bold={isActive}
					href="/archiwum/{resFactaNumber}"
					data-sveltekit-noscroll
				>
					Numer {resFactaNovaNumber} ({resFactaNumber}) {year}
				</a>
			</li>
		{/each}
	</ul>
</div>

<hr class="my-6 border-t-2 border-blue" />

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
{/if}

<ul>
	{#each articles as { abstract, authors, pdf, title }}
		<li class="list-inside list-disc">
			{#if authors?.length}
				{#each authors as { fullName, slug }, index}
					<a href="/autor/{slug}">{fullName}</a
					>{#if authors.length > 1 && index + 1 !== authors.length}
						,{' '}
					{/if}
				{/each}
			{/if}{title}
		</li>
	{/each}
</ul>
