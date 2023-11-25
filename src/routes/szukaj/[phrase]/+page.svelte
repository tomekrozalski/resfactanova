<script lang="ts">
	export let data;
</script>

<ul>
	{#each data.articles as { abstract, authors, pdf, title }}
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
