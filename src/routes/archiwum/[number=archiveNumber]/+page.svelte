<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBookmark } from '@fortawesome/pro-solid-svg-icons';

	export let data;
	$: ({ books } = data);
</script>

<h3>
	Archiwum <strong>indeks numerów</strong> / Archive <strong>index of the journal volumes</strong>
</h3>

<div class="flex gap-6">
	<ul class="list-inside list-disc">
		{#each books.filter(({ resFactaNovaNumber }) => !resFactaNovaNumber) as { resFactaNumber, year }}
			<li>Res Facta <a href="#numer-{resFactaNumber}">Numer {resFactaNumber} ({year})</a></li>
		{/each}
	</ul>
	<ul class="list-inside list-disc">
		{#each books.filter(({ resFactaNovaNumber }) => resFactaNovaNumber) as { resFactaNovaNumber, resFactaNumber, year }}
			<li>
				Res Facta Nova
				<a href="#numer-{resFactaNumber}">
					Numer {resFactaNovaNumber} ({resFactaNumber}) {year}
				</a>
			</li>
		{/each}
	</ul>
</div>

<hr class="my-6 border-t-2 border-blue" />

<h3>Archiwum <strong>Res Facta</strong> / <strong>Res Facta</strong> Archive</h3>

<ul>
	{#each books as { articles, resFactaNovaNumber, resFactaNumber, year }}
		<li id="numer-{resFactaNumber}">
			<h4 class="flex items-center">
				<Fa icon={faBookmark} size="0.8x" class="mr-2 text-red" />
				Numer
				{#if resFactaNovaNumber}
					{resFactaNovaNumber} ({resFactaNumber}) {year}
				{:else}
					{resFactaNumber} ({year})
				{/if}
			</h4>
			<ul>
				{#each articles as { authors, title }}
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
		</li>
	{/each}
</ul>
