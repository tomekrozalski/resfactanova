<script lang="ts">
	import type { FormattedBookTypes } from './utils/Book';

	export let books: FormattedBookTypes[];
</script>

<h3 class="mb-4 font-serif text-xl font-bold text-black">
	Archiwum <strong>indeks numerów</strong> / Archive <strong>index of the journal volumes</strong>
</h3>

<div class="flex flex-col gap-5 lg:flex-row">
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
