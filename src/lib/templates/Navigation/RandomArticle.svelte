<script lang="ts">
	import Fa from 'svelte-fa';
	import { faDownload } from '@fortawesome/pro-regular-svg-icons';
</script>

<a
	href="/"
	class="bg-gray-900 border-gray-800 text-gray-200 group mb-10 block rounded-l-lg border px-4 pb-2 pt-3 text-sm
   transition-colors hover:bg-blue hover:text-white
	 focus:outline-none focus-visible:rounded-none focus-visible:bg-blue focus-visible:text-white focus-visible:ring-4
	 focus-visible:ring-black focus-visible:ring-offset-4"
>
	<div>Paweł Krzaczkowski</div>
	<div class="text-base font-medium">"4 for Beckett. Uwagi na marginesie"</div>
	<div class="flex justify-between">
		Numer 17 (26) 2016 <Fa
			icon={faDownload}
			size="1.5x"
			class="text-blue transition-colors group-hover:text-white group-focus-visible:text-white"
		/>
	</div>
</a>
