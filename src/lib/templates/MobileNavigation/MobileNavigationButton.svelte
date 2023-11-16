<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/pro-solid-svg-icons';

	const dispatch = createEventDispatcher();
	let y = 0;

	$: isInversed = y > 100;
</script>

<svelte:window bind:scrollY={y} />

<button
	type="button"
	on:click={() => {
		dispatch('click');
	}}
	class="fixed right-2 top-2 z-30 flex items-center rounded p-4 lg:hidden"
	class:bg-black={isInversed}
	class:text-white={isInversed}
	class:bg-white={!isInversed}
	class:text-black={!isInversed}
>
	<Fa icon={faBars} size="2x" />
</button>
