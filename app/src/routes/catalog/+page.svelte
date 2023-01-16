<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{import.meta.env.VITE_COMPANY_NAME} | Каталог мебели</title>
	<meta
		name="description"
		content="Каталог мебели компании {import.meta.env.VITE_COMPANY_NAME}. Заказывайте бесплатный замер на нашем сайте."
	/>
</svelte:head>

<div class="bg-white">
	<div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
		<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
			<div class="space-y-5 sm:space-y-4">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Каталог мебели</h2>
				<p class="text-xl text-gray-500">Ознакомьтесь с нашими предложениями мебели из каталога.</p>
			</div>
			<div class="lg:col-span-2">
				<ul
					class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
				>
					<li>
						<a href="/shkafy">
							<div class="transition ease-in-out hover:scale-105 space-y-4 ">
								<div class="aspect-w-3 aspect-h-2">
									<img
										class="rounded-lg object-cover shadow-lg"
										src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg"
										alt="шкаф"
									/>
								</div>
								<div class="space-y-1 text-2xl font-medium leading-6">
									<h3>Шкафы</h3>
									<!-- <p class="text-indigo-600">Senior Front-end Developer</p> -->
								</div>
								<div class="text-lg">
									<p class="text-gray-500">
										Посмотрите шкафы различного наполнения и цветового решения в нашем каталоге.
										Работаем по индивидуальным заказам.
									</p>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="/kuhni">
							<div class="transition ease-in-out hover:scale-105 space-y-4">
								<div class="aspect-w-3 aspect-h-2">
									<img
										class="rounded-lg object-cover shadow-lg"
										src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg"
										alt="кухонный гарнитур"
									/>
								</div>
								<div class="space-y-1 text-2xl font-medium leading-6">
									<h3>Кухонные гарнитуры</h3>
									<!-- <p class="text-indigo-600">Senior Front-end Developer</p> -->
								</div>
								<div class="text-lg">
									<p class="text-gray-500">
										Любой кухонные гарнитуры, которые вы закажите из каталога может быть выполнен в
										любой комплектации и любого размера.
									</p>
								</div>
							</div>
						</a>
					</li>

					<!-- More people... -->
				</ul>
			</div>
		</div>
	</div>
</div>
