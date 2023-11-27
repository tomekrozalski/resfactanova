<script lang="ts">
	import Fa from 'svelte-fa';
	import { faAnglesRight } from '@fortawesome/pro-regular-svg-icons';
	import { page } from '$app/stores';

	export let isLast = false;
	export let name: string;
	export let url: string = '';

	$: categoryName = $page.route.id?.split('/')?.slice(1, 2)?.[0] ?? '';
	$: isActive = categoryName === url;
</script>

<li
	class={isLast ? '' : 'after:ml-2 after:block after:h-[1px] after:bg-white'}
	style="transition: padding 150ms"
	class:pl-6={!isActive}
>
	<a
		href={'/' + url}
		class="flex items-center justify-between rounded-l-lg px-4 py-1
			transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
		class:bg-black={isActive}
		class:text-white={isActive}
		class:focus-visible:bg-gray-600={!isActive}
		class:hover:bg-gray-600={!isActive}
	>
		{name}
		<Fa icon={faAnglesRight} size="0.8x" class={isActive ? 'text-white' : 'text-gray-400'} />
	</a>
</li>
