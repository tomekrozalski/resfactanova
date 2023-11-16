<script lang="ts">
	import TopBar from '$lib/templates/TopBar/TopBar.svelte';
	import MobileNavigation from '$lib/templates/MobileNavigation/MobileNavigation.svelte';
	import Navigation from '$lib/templates/Navigation/Navigation.svelte';
	import Footer from '$lib/templates/Footer.svelte';
	import '../app.css';
</script>

<MobileNavigation />

<div
	class="wrapper min-h-screen bg-yellow pb-1
	before:block before:h-5 before:w-full before:bg-yellow before:opacity-70 before:mix-blend-multiply"
>
	<div class="relative mx-auto max-w-4xl">
		<picture class="absolute opacity-90 mix-blend-multiply dark:hidden lg:-right-[30px]">
			<source srcset="/images/abstraction-top.avif" type="image/avif" />
			<source srcset="/images/abstraction-top.webp" type="image/webp" />
			<img alt="" src="/images/abstraction-top.jpg" />
		</picture>
	</div>
	<main class="relative z-10 mx-auto mt-28 max-w-4xl bg-white lg:rounded-2xl">
		<TopBar />
		<div class="lg:grid lg:grid-cols-3">
			<Navigation />
			<article class="text-gray-200 col-span-2 px-5 py-12 text-sm leading-normal lg:px-10 lg:pt-0">
				<slot />
			</article>
		</div>
	</main>
	<Footer />
	<div class="relative mx-auto max-w-4xl">
		<picture class="absolute bottom-14 left-0 dark:hidden lg:bottom-10">
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
	</div>
</div>
