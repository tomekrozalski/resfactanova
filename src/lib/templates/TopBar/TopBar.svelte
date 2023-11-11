<script lang="ts">
	import Logo from './Logo.svelte';
	import LargeFontSwitcher from './LargeFontSwitcher.svelte';
	import ContrastSwitcher from './ContrastSwitcher.svelte';
</script>

<header class="text-base lg:grid lg:grid-cols-3">
	<div class="flex items-center p-5">
		<h1>
			<a href="/"><Logo /></a>
		</h1>
		<h2 class="lg:w-28">
			<a
				href="/"
				class="text-gray-400 block px-6 py-4 font-serif font-normal transition-colors hover:text-black"
			>
				Teksty o&nbsp;muzyce współczesnej
			</a>
		</h2>
	</div>
	<div class="flex flex-col-reverse lg:col-span-2 lg:flex-row lg:justify-between">
		<div class="hidden items-start p-5 lg:flex lg:pl-10">
			<LargeFontSwitcher />
			<ContrastSwitcher />
		</div>
		<div class="flex shrink-0 gap-4 px-5 lg:py-5">
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
