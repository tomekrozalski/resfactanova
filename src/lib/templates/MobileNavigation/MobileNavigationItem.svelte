<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAnglesRight } from '@fortawesome/pro-regular-svg-icons';
	import { page } from '$app/stores';

	export let isLast = false;
	export let name: string;
	export let toggleNavigation: () => void;
	export let url: string = '';

	$: isActive = $page?.data?.pageName === url;
</script>

<li
	class={isLast ? '' : 'after:ml-2 after:block after:h-[1px] after:bg-white'}
	style="transition: padding 150ms"
	class:pl-6={!isActive}
>
	<a
		href={'/' + url}
		on:click={toggleNavigation}
		class="flex items-center justify-between px-4 py-3 text-base transition-colors"
		class:bg-black={isActive}
		class:text-white={isActive}
		class:rounded-l-lg={!isActive}
		class:hover:bg-gray-600={!isActive}
	>
		{name}
		<Fa icon={faAnglesRight} size="0.8x" class={isActive ? 'text-white' : 'text-gray-400'} />
	</a>
</li>
