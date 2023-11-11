<script lang="ts">
	import Logo from './Logo.svelte';
	import LargeFontSwitcher from './LargeFontSwitcher.svelte';
	import ContrastSwitcher from './ContrastSwitcher.svelte';
</script>

<header class="grid grid-cols-3 text-base">
	<div class="flex items-center p-5">
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
	<div class="col-span-2 flex justify-between">
		<div class="flex items-start px-10 py-5">
			<LargeFontSwitcher />
			<ContrastSwitcher />
		</div>
		<div class="flex gap-4 p-5">
			<a href="http://www.pwm.com.pl/">
				<img
					alt="PWM Edition"
					class="h-[58px] w-[58px]"
					src="/images/logos/pwm-edition-1x.webp"
					srcset="/images/logos/pwm-edition-1x.webp 1x, /images/logos/pwm-edition-2x.webp 2x"
				/>
			</a>
			<a href="http://www.muzykologia.amu.edu.pl/">
				<img
					alt="Instytut Muzykologii, Uniwersytet Adama Mickiewicza w Poznaniu"
					class="h-[55px] w-[285px]"
					src="/images/logos/muzykologia-poznan-1x.webp"
					srcset="/images/logos/muzykologia-poznan-1x.webp 1x, /images/logos/muzykologia-poznan-2x.webp 2x"
				/>
			</a>
		</div>
	</div>
</header>
