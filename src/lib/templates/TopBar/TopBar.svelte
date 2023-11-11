<script lang="ts">
	import Logo from './Logo.svelte';
	import LargeFontSwitcher from './LargeFontSwitcher.svelte';
	import ContrastSwitcher from './ContrastSwitcher.svelte';
</script>

<header class="flex gap-8 p-5">
	<div class="flex items-center">
		<h1>
			<a href="/"><Logo /></a>
		</h1>
		<h2 class="w-28">
			<a
				href="/"
				class="text-gray-400 block px-6 py-4 font-serif font-normal transition-colors hover:text-black"
			>
				Teksty o&nbsp;muzyce współczesnej
			</a>
		</h2>
	</div>
	<div class="flex flex-grow justify-between">
		<div class="flex h-[58px] flex-grow items-center justify-center">
			<LargeFontSwitcher />
			<ContrastSwitcher />
		</div>
		<div class="flex gap-4">
			<a href="http://www.pwm.com.pl/">
				<img
					alt=""
					class="h-[58px] w-[58px]"
					src="/images/logos/pwm-edition-1x.webp"
					srcset="/images/logos/pwm-edition-1x.webp 1x, /images/logos/pwm-edition-2x.webp 2x"
				/>
			</a>
			<a href="http://www.muzykologia.amu.edu.pl/">
				<img
					alt=""
					class="h-[55px] w-[285px]"
					src="/images/logos/muzykologia-poznan-1x.webp"
					srcset="/images/logos/muzykologia-poznan-1x.webp 1x, /images/logos/muzykologia-poznan-2x.webp 2x"
				/>
			</a>
		</div>
	</div>
</header>
