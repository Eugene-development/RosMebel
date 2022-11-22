<script>
	import Benefits from '$lib/components/benefits/index.svelte';

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



		export let data;

</script>



<!-- <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
	
	<h1
		class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
	>
		<span class="relative whitespace-nowrap text-blue-600">
			<svg
				aria-hidden="true"
				viewBox="0 0 418 42"
				class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
				preserveAspectRatio="none"
			>
				<path
					d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
				/>
			</svg>
			<span class="relative">Мебель на заказ</span> <br />
		</span>
		для вашего дома и офиса
	</h1>
	<p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
		Предлагаем корпусную мебель на заказ от проверенных производителей и поставщиков. Гарантии и
		поддержка 24/7.
	</p>
	<div class="mt-10 flex justify-center gap-x-6">
		<button class="bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" href="/register">Постоянное сопровождение проекта</button>
         <button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            class="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span class="ml-3">Watch video</span>
        </button>
	</div>
	<div class="mt-36 lg:mt-44">
		<p class="font-display text-base text-slate-900">Используемые технологии</p>
		<ul
          role="list"
          class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Yandex', logo: logoYandex },
              { name: 'Svelte', logo: logoSvelte },
              { name: 'React', logo: logoReact },
            ],
            [
              
              { name: 'Laravel', logo: logoLaravel },
              { name: 'GraphQL', logo: logoGraphQL },
              { name: 'Nodejs', logo: logoNode }
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} class="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
	</div>
</div> -->



<!-- This example requires Tailwind CSS v3.0+ -->
<div class="isolate bg-white">
  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
      <defs>
        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9089FC"></stop>
          <stop offset="1" stop-color="#FF80B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="px-6 pt-6 lg:px-8">
    <div>
      <nav class="flex h-9 items-center justify-between" aria-label="Global">
        <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="/" class="">
            <span class="sr-only">Your Company</span>
            <img class="h-10 mb-4" src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo4.png" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: outline/bars-3 -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="/" class="font-semibold text-gray-900 hover:text-gray-900">Замер</a>

          <a href="/" class="font-semibold text-gray-900 hover:text-gray-900">Доставка</a>

          <a href="/" class="font-semibold text-gray-900 hover:text-gray-900">Установка</a>
          <a href="/" class="font-semibold text-gray-900 hover:text-gray-900">Оплата</a>

          <a href="/" class="font-semibold text-gray-900 hover:text-gray-900">Гарантии</a>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <a href="/" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Запись на замер</a>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div role="dialog" aria-modal="true">
        <div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex h-9 items-center justify-between">
            <div class="flex">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="">
              </a>
            </div>
            <div class="flex">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="/" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Product</a>

                <a href="/" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Features</a>

                <a href="/" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Marketplace</a>

                <a href="/" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Company</a>
              </div>
              <div class="py-6">
                <a href="/" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-7xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span class="text-gray-600">
                Посетите наш мебельный блог <a href="/" class="font-semibold text-blue-600"><span class="absolute inset-0" aria-hidden="true"></span>Почитать <span aria-hidden="true">&rarr;</span></a>
              </span>
            </div>
          </div>
          <div>
		<h1
			class="mx-auto max-w-7xl text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
		>
			<span class="relative whitespace-nowrap text-blue-600">
				<svg
					aria-hidden="true"
					viewBox="0 0 418 42"
					class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
					preserveAspectRatio="none"
				>
					<path
						d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
					/>
				</svg>
				<span class="relative">Мебель на заказ</span> <br />
			</span>
			для вашего дома и офиса
		</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Качественная и недорогая корпусная мебель на заказ с услугами доставки и установки.</p>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <a href="/" class="inline-block rounded-lg bg-gradient-to-tr from-red-600 via-red-800 to-blue-600 hover:bg-gradient-to-bl px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1">
                Посмотреть каталог
                <span class="text-red-100" aria-hidden="true">&rarr;</span>
              </a>
              <a href="/" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Заказать сборку
                <span class="text-gray-400" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>






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
				Широкий ассортимент предлагаемой мебели
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
								<figure class="my-2 relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
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


<Benefits {...data.contentBenefits} />
