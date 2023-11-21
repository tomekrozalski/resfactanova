<script lang="ts">
	export let data;

	$: ({ articles, author } = data);
</script>

<h3>{author.firstName} {author.lastName}</h3>

{#if author.notes}
	<p>{author.notes}</p>
{/if}

<ul class="list-inside list-disc">
	{#each articles as { authors, book, title }}
		<li>
			{#if book.isResFactaNova}
				Res Facta Nova,
			{:else}
				Res Facta,
			{/if} numer {book.resFactaNumber}
			{#if book.isResFactaNova}
				(book.resFactaNovaNumber) {book.year}:
			{:else}
				({book.year}):
			{/if}
			{#each authors as { fullName, slug }, index}
				<a href="/autor/{slug}">{fullName}</a
				>{#if authors.length > 1 && index + 1 !== authors.length}
					,{' '}
				{/if}
			{/each}
			{title}
		</li>
	{/each}
</ul>
