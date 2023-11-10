<script lang="ts">
	import TopBar from '$lib/templates/TopBar/TopBar.svelte';
	import '../app.css';
</script>

<main class="relative mx-auto mb-48 mt-32 max-w-4xl rounded-2xl bg-white">
	<picture
		class="absolute -right-[30px] -top-[125px] -z-10 opacity-90 mix-blend-multiply dark:hidden"
	>
		<source srcset="/images/abstraction-top.avif" type="image/avif" />
		<source srcset="/images/abstraction-top.webp" type="image/webp" />
		<img alt="" src="/images/abstraction-top.jpg" />
	</picture>
	<TopBar />
	<slot />
	<picture class="absolute bottom-3 left-0 -z-10 w-full translate-y-full dark:hidden">
		<source srcset="/images/abstraction-bottom.avif" type="image/avif" />
		<source srcset="/images/abstraction-bottom.webp" type="image/webp" />
		<img
			alt=""
			class="w-full"
			src="/images/abstraction-bottom.jpg"
			loading="lazy"
			decoding="async"
		/>
	</picture>
</main>
