<script lang="ts">
	import Logo from './Logo.svelte';
</script>

<header>
	<Logo />
	<ul>
		<li class="font-serif">Teksty o muzyce współczesnej</li>
	</ul>
</header>
Bodoni Moda

<style>
	header {
		padding: 20px;
	}

	header :global(svg) {
		width: 80px;
		display: inline-block;
	}

	ul {
		margin-left: 50px;
		display: inline-block;
	}

	li {
		font-size: 20px;

		/* color: #999994; */
		margin-block: 10px;
	}
</style>
