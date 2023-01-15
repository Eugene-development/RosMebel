<script>
	import { visibleMobileMenu } from '$lib/store/stores';
	import { useInvert } from '$lib/functions/broker';
	const { invert } = useInvert;

</script>
<div class="px-6 py-4 lg:px-8 bg-black">
	<div>
		<nav class="flex h-9 items-center justify-between" aria-label="Global">
			<div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
				<a href="/" class="">
					<span class="sr-only">Азбука Комфорта</span>
					<img
						class="h-10 mb-2"
						src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo2.png"
						alt=""
					/>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					on:click={() => visibleMobileMenu.update(invert)}
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<!-- Heroicon name: outline/bars-3 -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div
				class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-9 text-gray-50 hover:text-gray-100"
			>
				<a href="/information/zamer" class="font-semibold">Замер</a>
				<a href="/information/dostavka" class="font-semibold">Доставка</a>
				<a href="/information/ustanovka" class="font-semibold">Установка</a>
				<a href="/information/oplata" class="font-semibold">Оплата</a>
				<a href="/contacts" class="font-semibold">Контакты</a>
				<!-- <a href="/" class="font-semibold text-gray-900 hover:text-gray-900">Контакты</a> -->
			</div>
			<div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
				<div
					class="flex inline-block rounded-lg px-3 py-1.5 text-xl font-semibold leading-6 text-gray-50 shadow-sm ring-2 ring-gray-50/10 hover:ring-gray-100/20"
				>
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-50"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
						/>
					</svg>
					<a href="tel:79306711455" class="ml-2 text-gray-50 text-xs sm:text-lg font-bold "
						>8 (930) 671-14-55</a
					>
				</div>
			</div>
		</nav>
	</div>
</div>
