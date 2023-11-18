<script lang="ts">
	import LargeFontSwitcher from '../Accessibility/LargeFontSwitcher.svelte';
	import ContrastSwitcher from '../Accessibility/ContrastSwitcher.svelte';
	import Logo from './Logo.svelte';
</script>

<header class="text-base lg:grid lg:grid-cols-3">
	<div class="flex items-center p-5 lg:pr-16">
		<h1>
			<a
				href="/"
				class="block focus-visible:outline-none focus-visible:ring-8 focus-visible:ring-black focus-visible:ring-offset-4"
			>
				<Logo />
			</a>
		</h1>
		<h2>
			<a
				href="/"
				class="text-gray-400 ml-2 block p-4 font-serif font-normal transition-colors hover:text-black
				focus-visible:ml-4 focus-visible:px-2 focus-visible:text-black focus-visible:outline-none
				focus-visible:ring-8 focus-visible:ring-black focus-visible:ring-offset-4"
			>
				Teksty o&nbsp;muzyce współczesnej
			</a>
		</h2>
	</div>
	<div class="flex flex-col-reverse items-start lg:col-span-2 lg:flex-row lg:justify-between">
		<div class="hidden items-start p-5 lg:flex lg:pl-10">
			<LargeFontSwitcher />
			<ContrastSwitcher />
		</div>
		<div class="flex shrink-0 gap-4 px-5 lg:py-5">
			<a
				href="http://www.pwm.com.pl/"
				class="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4"
			>
				<img
					alt="PWM Edition"
					class="h-[58px] w-[58px]"
					src="/images/logos/pwm-edition-1x.webp"
					srcset="/images/logos/pwm-edition-1x.webp 1x, /images/logos/pwm-edition-2x.webp 2x"
				/>
			</a>
			<a
				href="http://www.muzykologia.amu.edu.pl/"
				class="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-4"
			>
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
