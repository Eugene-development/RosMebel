<script>
	import { fade, fly } from "svelte/transition";
	import axios from 'axios';
	import Brands from '$lib/components/brands/index.svelte';

	import { contactFormSent } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/invert';
	const { invertToTrue } = useInvert;

	const changeVisibleSentenceForm = () => contactFormSent.update(invertToTrue);

	const header = 'Предложение о сотрудничестве';
	const dataForm = {
		name: '',
		position: '',
		email: '',
		phone: '',
		sentence: ''
	};

	const url = `/send-sentence-form-azbuka`;
	const apiCRUD = {
		// baseURL: 'http://127.0.0.1:8002/',
		baseURL: 'https://larux.ru:7721/',

		headers: {
			Authorization: `Bearer 7`
		}
	};
	async function sendSentence() {
		try {
			const data = { ...dataForm };
			console.log(data);
			changeVisibleSentenceForm();
			await axios.post(url, data, apiCRUD);
		} catch (error) {
			console.error(error);
		}
	}

	export let content;
</script>

<section class="bg-white dark:bg-gray-900" in:fly="{{ x: 100, duration: 1500 }}" out:fade={{ duration: 500 }}>
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
		<a
			href="/catalog"
			class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
		>
			<span class="text-xs bg-blue-500 rounded-full text-white px-4 py-1.5 mr-3">Посмотреть</span>
			<span class="text-sm font-medium">Наш мебельный каталог</span>
			<svg
				class="ml-2 w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
					clip-rule="evenodd"
				/></svg
			>
		</a>
		<h1
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			Контакты
		</h1>
		<p
			class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
		>
			Связаться с нами вы можете по телефону, по электронной почте или, приехав к нам,
			предварительно оговорив время встречи. Также мы можем встретиться у вас на объекте, если вы
			закажите услугу замерщика.
		</p>

		<div class="w-full my-12">
			<div class="relative bg-white shadow-xl">
				<h2 class="sr-only">Контакты</h2>

				<div class="grid grid-cols-1 lg:grid-cols-3 bg-gray-50 text-left">
					<!-- Contact information -->
					<div class="relative overflow-hidden py-10 px-6 bg-blue-600 sm:px-10 xl:p-12">
						<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
							<svg
								class="absolute inset-0 w-full h-full"
								width="343"
								height="388"
								viewBox="0 0 343 388"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
									fill="url(#linear1)"
									fill-opacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear1"
										x1="254.553"
										y1="107.554"
										x2="961.66"
										y2="814.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff" />
										<stop offset="1" stop-color="#fff" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div
							class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
							aria-hidden="true"
						>
							<svg
								class="absolute inset-0 w-full h-full"
								width="359"
								height="339"
								viewBox="0 0 359 339"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
									fill="url(#linear2)"
									fill-opacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear2"
										x1="192.553"
										y1="28.553"
										x2="899.66"
										y2="735.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff" />
										<stop offset="1" stop-color="#fff" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div
							class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
							aria-hidden="true"
						>
							<svg
								class="absolute inset-0 w-full h-full"
								width="160"
								height="678"
								viewBox="0 0 160 678"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
									fill="url(#linear3)"
									fill-opacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear3"
										x1="192.553"
										y1="325.553"
										x2="899.66"
										y2="1032.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff" />
										<stop offset="1" stop-color="#fff" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 class="text-xl font-medium text-white">Контактная информация:</h3>
						<p class="mt-6 text-base text-blue-50 max-w-3xl">{content.address}</p>
						<dl class="mt-8 space-y-6">
							<dt><span class="sr-only">Телефон</span></dt>
							{#each content.phones as { phone, name }}
								<dd class="flex text-base text-blue-50">
									<!-- Heroicon name: outline/phone -->
									<svg
										class="flex-shrink-0 w-6 h-6 text-blue-100"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span class="ml-3">{phone} ({name}) </span>
								</dd>
							{/each}
							<dt><span class="sr-only">Почта</span></dt>
							{#each content.emails as { email }}
								<dd class="flex text-base text-blue-50">
									<!-- Heroicon name: outline/mail -->
									<svg
										class="flex-shrink-0 w-6 h-6 text-blue-100"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span class="ml-3">{email}</span>
								</dd>
							{/each}
						</dl>
					</div>

					<!-- Contact form -->
					<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
						<h3 class="text-lg font-medium text-gray-900 border-b pb-2">
							Предложение о сотрудничестве:
						</h3>
						<form
							on:submit|preventDefault|once={sendSentence}
							class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label for="name" class="block text-sm font-medium text-gray-900">Имя</label>
								<div class="mt-1">
									<input
										bind:value={dataForm.name}
										type="text"
										name="name"
										id="name"
										autocomplete="name"
										required
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border"
									/>
								</div>
							</div>
							<div>
								<label for="position" class="block text-sm font-medium text-gray-900"
									>Должность</label
								>
								<div class="mt-1">
									<input
										bind:value={dataForm.position}
										type="text"
										name="position"
										id="position"
										required
										autocomplete="position"
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border"
									/>
								</div>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-900">Почта</label>
								<div class="mt-1">
									<input
										bind:value={dataForm.email}
										id="email"
										required
										name="email"
										type="email"
										autocomplete="email"
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border"
									/>
								</div>
							</div>
							<div>
								<div class="flex justify-between">
									<label for="phone" class="block text-sm font-medium text-gray-900">Телефон</label>
								</div>
								<div class="mt-1">
									<input
										bind:value={dataForm.phone}
										id="phone"
										type="text"
										name="phone"
										required
										autocomplete="tel"
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border"
										aria-describedby="phone-optional"
									/>
								</div>
							</div>
							<div class="sm:col-span-2">
								<div class="flex justify-between">
									<label for="sentence" class="block text-sm font-medium text-gray-900"
										>Предложение</label
									>
									<span id="sentence-max" class="text-sm text-gray-500">Максимум 500 символов</span>
								</div>
								<div class="mt-1">
									<textarea
										bind:value={dataForm.sentence}
										id="sentence"
										required
										name="sentence"
										rows="4"
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
										aria-describedby="sentence-max"
									/>
								</div>
							</div>
							<!--                        <div class="sm:col-span-2">-->
							<!--                            <div class="flex justify-between">-->
							<!--                                <label for="file-upload" class="block text-sm font-medium text-gray-900">Загрузить файл</label>-->
							<!--                            </div>-->
							<!--                            <div class=" mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">-->
							<!--                                <div class="space-y-1 text-center">-->
							<!--                                    <svg class="mx-auto h-12 w-48 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">-->
							<!--                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />-->
							<!--                                    </svg>-->
							<!--                                    <div class="flex text-sm text-gray-600">-->
							<!--                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-red-800 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">-->
							<!--                                            <span>Загрузите файл</span>-->
							<!--                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">-->
							<!--                                        </label>-->
							<!--                                        <p class="pl-1">или перетяните его в эту область</p>-->
							<!--                                    </div>-->
							<!--                                    <p class="text-xs text-gray-500">-->
							<!--                                        PNG, JPG, GIF up to 10MB-->
							<!--                                    </p>-->
							<!--                                </div>-->
							<!--                            </div>-->

							<!--                        </div>-->

							<div class="sm:col-span-2 sm:flex sm:justify-end">
								{#if $contactFormSent}
									<span
										class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
									>
										Отправлено
									</span>
								{:else}
									<button
										type="submit"
										class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
									>
										Отправить
									</button>
								{/if}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
