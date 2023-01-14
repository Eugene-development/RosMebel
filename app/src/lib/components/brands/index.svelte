<script>
	import logoHettich from '$lib/images/logos/hettich-international.svg';
	import logoBlum from '$lib/images/logos/blum.svg';
	import logoGrass from '$lib/images/logos/grass.svg';
	import logoFGV from '$lib/images/logos/fgv.svg';
	import logoHafele from '$lib/images/logos/hafele.svg';
	import logoGTV from '$lib/images/logos/gtv.svg';

	const brands = [
		{ name: 'Hettich', logo: logoHettich },
		{ name: 'Blum', logo: logoBlum },
		{ name: 'Hafele', logo: logoHafele },
		{ name: 'FGV', logo: logoFGV },
		{ name: 'Grass', logo: logoGrass },
		{ name: 'GTV', logo: logoGTV }
	];
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pb-16 text-center ">
	<div class="">
		<ul
			class="mt-8 flex items-center justify-center gap-x-8 sm:gap-x-10 xl:gap-x-12"
		>
			{#each brands as company}
				<li>
					<ul class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
						<img src={company.logo} alt={company.name} unoptimized />
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</div>
