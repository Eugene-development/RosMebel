<script>
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
	import backgroundImage from '$lib/images/background-features.jpg';

	let tabOrientation = 'gorizontal';

	let img = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/shkaf.jpeg';

	const features = [
		{
			title: 'Шкафы',
			description:
				'Красивые и практичные шкафы любого размера под заказ для вашей спальни, балкона или прихожей',
			image: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/shkaf.jpeg',
			link: 'shkafy'
		},
		{
			title: 'Кухонные гарнитуры',
			description:
				'Вместительные и качественные кухонные гарнитуры под любой размер кухни и со всеми пожеланиями заказчика',
			image: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg',
			link: 'kuhni'
		},
		// {
		// 	title: 'Кровати и матрасы',
		// 	description:
		// 		"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
		// 	image: screenshotVatReturns
		// },
		{
			title: 'Обеденные группы',
			description:
				'Столы и стулья с покрытием из пластика или стекла в любой комплектации и различном цветовом решении',
			image: 'https://yagoda-mebel.ru/upload/iblock/2d1/l59fw80lecrwfxl0wygkess2uoky67z5.jpg'
		}
	];
</script>

<section
	aria-label="Features for running your books"
	class="relative overflow-hidden bg-blue-600 px-10 pt-16 pb-28"
>
	<img
		class="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
		src={backgroundImage}
		alt=""
		width={2245}
		height={1636}
		unoptimized
	/>
	<div class="relative">
		<div class="max-w-3xl mx-auto text-center xl:max-w-none">
			<h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
				Наш каталог мебели
			</h2>
			<!-- <p class="mt-5 text-lg tracking-tight text-blue-100">
				Приобретая мебель на заказ вы получаете за разумную цену именно то что хотели и что подходит по размерам вашему помещению.
			</p> -->
			<p class="mt-10 text-lg tracking-tight text-blue-100">
				Приобретая мебель на заказ через наш каталог вы получаете за разумную цену именно то что хотели и что подходит
				по размерам вашему помещению. А наши замерщики и консультанты помогут вам не ошибиться и
				сделать правильный выбор. Позиции вариантов мебели в каталоге постоянно пополняются.
			</p>
		</div>
		<TabGroup
			as="div"
			class="hidden mt-10 lg:grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-12 lg:grid-cols-12 lg:pt-0 "
			vertical={tabOrientation === 'vertical'}
		>
			<div
				class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 z-10"
			>
				<TabList
					class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
				>
					{#each features as feature}
						<!-- <a href={feature.link}> -->
						<div
							on:mouseenter={() => (img = feature.image)}
							key={feature.title}
							class="transition ease-in-out hover:scale-105 hidden lg:block my-3 group relative rounded-full py-2 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-8 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
						>
							<h3>
								<Tab class="font-display text-2xl  text-blue-100 hover:text-white lg:text-white">
									<span class="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
									{feature.title}
								</Tab>
							</h3>
							<p class="mt-1 hidden text-sm lg:block text-white">
								{feature.description}
							</p>
						</div>
						<!-- </a> -->
					{/each}
				</TabList>
			</div>
			<TabPanels class="lg:col-span-7 z-50">
				{#each features as feature}
					<TabPanel key={feature.title} unmount={false}>
						<div class="relative sm:px-6 lg:hidden">
							<div
								class="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
							/>
							<p class="relative mx-auto max-w-2xl text-base text-white sm:text-center">
								{feature.description}
							</p>
						</div>

						<div
							class=" mt-8 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
						>
							<img
								class="w-full object-cover h-[38rem]"
								src={img}
								alt=""
								priority
								sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
							/>
						</div>
					</TabPanel>
				{/each}
			</TabPanels>
		</TabGroup>

	</div>
</section>
