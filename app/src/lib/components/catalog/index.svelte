<script>
    	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
	import backgroundImage from '$lib/images/background-features.jpg';

	import screenshotExpenses from '$lib/images/screenshots/expenses.png';
	import screenshotPayroll from '$lib/images/screenshots/payroll.png';

	import screenshotReporting from '$lib/images/screenshots/reporting.png';
	import screenshotVatReturns from '$lib/images/screenshots/vat-returns.png';

	let tabOrientation = 'gorizontal';


	const features = [
		{
			title: 'Шкафы',
			description:
				"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
			image: "https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/shkaf.jpeg"
		},
		{
			title: 'Кухонные гарнитуры',
			description:
				"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
			image: "https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg"
		},
		{
			title: 'Кровати и матрасы',
			description:
				"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
			image: screenshotVatReturns
		},
		{
			title: 'Обеденные группы',
			description: 'Встроенная в админ-панель система мониторинга позиций',
			image: screenshotReporting
		},
		{
			title: 'Офисная мебель',
			description:
				'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
			image: screenshotReporting
		}
		// {
		//   title: 'Личный менеджер',
		//   description:
		//     'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
		//   image: screenshotReporting,
		// },
	];

</script>

<section
	id="features"
	aria-label="Features for running your books"
	class="relative overflow-hidden bg-blue-600 pt-20 px-20 pb-28 sm:py-32"
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
		<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
			<h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
				Наш каталог мебели
			</h2>
			<p class="mt-6 text-lg tracking-tight text-blue-100">
				Приобретая мебель на заказ вы получаете за разумную цену именно то что хотели и что подходит по размерам вашему помещению.
			</p>
		</div>
		<TabGroup
			as="div"
			class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
			vertical={tabOrientation === 'vertical'}
		>
			<div
				class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
			>
				<TabList
					class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
				>
					{#each features as feature}
						<div
							key={feature.title}
							class="my-2 group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
						>
							<h3>
								<Tab
									class="font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
								>
									<span class="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
									{feature.title}
								</Tab>
							</h3>
							<p class="mt-2 hidden text-sm lg:block text-white">
								{feature.description}
							</p>
						</div>
					{/each}
				</TabList>
			</div>
			<TabPanels class="lg:col-span-7">
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
							class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
						>
							<img
								class="w-full"
								src={feature.image}
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
