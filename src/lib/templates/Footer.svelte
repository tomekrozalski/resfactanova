<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCopyright } from '@fortawesome/pro-regular-svg-icons';

	const date = new Date();
	const year = date.getFullYear();
</script>

<footer
	class="relative z-10 mx-auto flex max-w-4xl items-center px-7 pb-8 pt-16 text-xs text-gray-200 lg:mb-36 lg:py-2"
>
	<Fa icon={faCopyright} class="mr-1" /> Res Facta Nova 2010-{year}
</footer>
