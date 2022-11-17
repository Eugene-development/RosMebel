<script>
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
	import backgroundImage from '$lib/images/background-features.jpg';

	import avatarImage1 from '$lib/images/avatars/avatar-1.png';
	import avatarImage2 from '$lib/images/avatars/avatar-2.png';
	import avatarImage3 from '$lib/images/avatars/avatar-3.png';
	import avatarImage4 from '$lib/images/avatars/avatar-4.png';
	import avatarImage5 from '$lib/images/avatars/avatar-5.png';
	import screenshotExpenses from '$lib/images/screenshots/expenses.png';
	import screenshotPayroll from '$lib/images/screenshots/payroll.png';
	import screenshotReporting from '$lib/images/screenshots/reporting.png';
	import screenshotVatReturns from '$lib/images/screenshots/vat-returns.png';

	let tabOrientation = 'gorizontal';

	const testimonials = [
		[
			{
				content:
					'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
				author: {
					name: 'Sheryl Berge',
					role: 'CEO at Lynch LLC',
					image: avatarImage1
				}
			},
			{
				content:
					'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
				author: {
					name: 'Amy Hahn',
					role: 'Director at Velocity Industries',
					image: avatarImage4
				}
			}
		],
		[
			{
				content:
					'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
				author: {
					name: 'Leland Kiehn',
					role: 'Founder of Kiehn and Sons',
					image: avatarImage5
				}
			},
			{
				content:
					'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
				author: {
					name: 'Erin Powlowski',
					role: 'COO at Armstrong Inc',
					image: avatarImage2
				}
			}
		],
		[
			{
				content:
					'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
				author: {
					name: 'Peter Renolds',
					role: 'Founder of West Inc',
					image: avatarImage3
				}
			},
			{
				content:
					'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
				author: {
					name: 'Amy Hahn',
					role: 'Director at Velocity Industries',
					image: avatarImage4
				}
			}
		]
	];

	const features = [
		{
			title: 'Высокоскоростной сайт',
			description:
				"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
			image: screenshotPayroll
		},
		{
			title: 'Система управления проектом',
			description:
				"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
			image: screenshotExpenses
		},
		{
			title: 'Реклама в Яндексе',
			description:
				"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
			image: screenshotVatReturns
		},
		{
			title: 'SEO продвижение',
			description: 'Встроенная в админ-панель система мониторинга позиций',
			image: screenshotReporting
		},
		{
			title: 'Мониторинг конкурентов',
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
	id="testimonials"
	aria-label="What our customers are saying"
	class="bg-slate-50 py-20 sm:py-32"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl md:text-center">
			<h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
				Отзывы о нашей работе.
			</h2>
			<p class="mt-4 text-lg tracking-tight text-slate-700">
				Однажды, возможно, мы разместим и ваш положительный отзыв о нашей компании. Мы будем очень
				стараться для этого.
			</p>
		</div>
		<ul
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
		>
			{#each testimonials as column}
				<li>
					<ul class="flex flex-col gap-y-6 sm:gap-y-8">
						{#each column as testimonial}
							<li>
								<figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
									<svg
										class="absolute top-6 left-6 fill-slate-100"
										aria-hidden="true"
										width={105}
										height={78}
									>
										<path
											d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
										/>
									</svg>

									<blockquote class="relative">
										<p class="text-lg tracking-tight text-slate-900">
											{testimonial.content}
										</p>
									</blockquote>
									<figcaption
										class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
									>
										<div>
											<div class="font-display text-base text-slate-900">
												{testimonial.author.name}
											</div>
											<div class="mt-1 text-sm text-slate-500">
												{testimonial.author.role}
											</div>
										</div>
										<div class="overflow-hidden rounded-full bg-slate-50">
											<img
												class="h-14 w-14 object-cover"
												src={testimonial.author.image}
												alt=""
												width={56}
												height={56}
											/>
										</div>
									</figcaption>
								</figure>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</section>

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
				В полном пакете вы получаете самые важные инструменты для работы в сети интернет
			</h2>
			<p class="mt-6 text-lg tracking-tight text-blue-100">
				Вы можете воспользоваться только сайтом, а SEO и рекламой заниматься самостоятельно
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
							class="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
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
