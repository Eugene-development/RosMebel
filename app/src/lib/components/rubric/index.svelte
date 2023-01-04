<script>
	export let content;
</script>

<div id="models" class="bg-white">
	<div class="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16">
		<div class="space-y-12">
			<!-- <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Шкафы</h2>
        <p class="text-xl text-gray-500">Выберите интересующую вас категорию шкафов</p>
      </div> -->
			<ul
				class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
			>
				{#each content.types as { title, description, link, img }}
					<li>
						<a href="/{link}" class="transition ease-in-out hover:scale-105">
							<div class="space-y-3">
								<div class="aspect-w-3 aspect-h-2">
									<img class="rounded-lg object-cover shadow-lg " src={img} alt="мебель" />
								</div>

								<div class="space-y-2">
									<div class="space-y-1  leading-6">
										<h3 class="text-xl font-bold">{title}</h3>
										<p class="mt-2 text-sm text-gray-500">{description}</p>
										<!-- <span class="text-green-600">Подробнее</span> -->
									</div>
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

