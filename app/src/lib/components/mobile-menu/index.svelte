<script>
	import { visibleMobileMenu } from '$lib/store/stores';
	import { useInvert } from '$lib/functions/broker';
	const { invert } = useInvert;
</script>
{#if $visibleMobileMenu}
    <div role="dialog" aria-modal="true">
        <div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div class="flex h-9 items-center justify-between">
                <div class="flex">
                    <a on:click={() => visibleMobileMenu.update(invert)} href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-8"
                            src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo4.png"
                            alt=""
                        />
                    </a>
                </div>
                <div class="flex">
                    <button
                        on:click={() => visibleMobileMenu.update(invert)}
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x-mark -->
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a
                            on:click={() => visibleMobileMenu.update(invert)}
                            href="/catalog"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >Каталог</a
                        >

                        <a
                            on:click={() => visibleMobileMenu.update(invert)}
                            href="/information/zamer"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >Замер</a
                        >

                        <a
                            on:click={() => visibleMobileMenu.update(invert)}
                            href="/information/dostavka"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >Доставка</a
                        >

                        <a
                            on:click={() => visibleMobileMenu.update(invert)}
                            href="/information/ustanovka"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >Установка</a
                        >

                        <a
                            on:click={() => visibleMobileMenu.update(invert)}
                            href="/information/oplata"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >Оплата</a
                        >

                        <a
                            on:click={() => visibleMobileMenu.update(invert)}
                            href="/contacts"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >Контакты</a
                        >
                    </div>
                    <div class="inline-flex items-center justify-center py-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-900 mr-2"
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
                        <a
                            href="tel:79306711455"
                            class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                            >8 (930) 671-14-55</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
