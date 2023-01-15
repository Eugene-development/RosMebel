<script>
	import { fly } from 'svelte/transition'
    let width;

	import { visibleFormMeasurement } from '$lib/store/stores';
	import { useInvert } from '$lib/functions/broker';
	const { invert } = useInvert;

	let name;
	let phone;
	let time;
	let address;
	let comment;

	const url = `/sendMeasurement`;
	const apiCRUD = {
		baseURL: 'https://larux.ru:7721/',
		headers: {
			Authorization: `Bearer ???`
		}
	};
	async function sendFormMeasurement() {
		try {
			const data = {
				name,
				phone,
				time,
				address,
				comment
			};
			// await axios.post(url, data, apiCRUD);
			name = '';
			phone = '';
			time = '';
			address = '';
			comment = '';
			visibleFormMeasurement.update(invert);
		} catch (error) {
			console.error(error);
		}
	}
</script>

{#if $visibleFormMeasurement}
	<div class="relative z-50 " aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0" />

		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
					<!--
                    Slide-over panel, show/hide based on slide-over state.

                    Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-full"
                        To: "translate-x-0"
                    Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-0"
                        To: "translate-x-full"
                    -->
					
					<div bind:clientWidth={width} transition:fly={{ x: width }} class="pointer-events-auto w-screen max-w-md ">
						<form
							on:submit|preventDefault={sendFormMeasurement}
							class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
						>
							<div class="h-0 flex-1 overflow-y-auto">
								<div
									class="bg-gradient-to-tr from-green-600 via-green-700 to-green-600 py-6 px-4 sm:px-6"
								>
									<div class="flex items-center justify-between">
										<h2 class="text-lg font-medium text-white" id="slide-over-title">
											Запись на замер
										</h2>
										<div class="ml-3 flex h-7 items-center">
											<button
												on:click={() => visibleFormMeasurement.update(invert)}
												type="button"
												class="rounded-md bg-green-600 text-green-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
											>
												<span class="sr-only">Close panel</span>
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
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
									</div>
									<div class="mt-1">
										<p class="text-sm text-green-50">
											Наш менеджер свяжется с вами в ближайшее время после оформления заявки.
										</p>
									</div>
								</div>
								<div class="flex flex-1 flex-col justify-between">
									<div class="divide-y divide-gray-200 px-4 sm:px-6">
										<div class="space-y-6 pt-6 pb-5">
											<div>
												<label for="project-name" class="block text-sm font-medium text-gray-900"
													>Ваше имя</label
												>
												<div class="mt-1">
													<input
														bind:value={name}
														required
														type="text"
														name="project-name"
														id="project-name"
														class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
													/>
												</div>
											</div>
											<div>
												<label for="phone" class="block text-sm font-medium text-gray-900"
													>Телефон</label
												>
												<div class="mt-1">
													<input
														bind:value={phone}
														required
														type="tel"
														name="phone"
														id="phone"
														class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
													/>
												</div>
											</div>
											<div>
												<label for="time" class="block text-sm font-medium text-gray-900"
													>Удобное время</label
												>
												<div class="mt-1">
													<input
														bind:value={time}
														type="text"
														name="time"
														id="time"
														class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
													/>
												</div>
											</div>
											<div>
												<label for="address" class="block text-sm font-medium text-gray-900"
													>Адрес</label
												>
												<div class="mt-1">
													<input
														bind:value={address}
														required
														type="text"
														name="address"
														id="address"
														class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
													/>
												</div>
											</div>
											<div>
												<label for="description" class="block text-sm font-medium text-gray-900"
													>Комментарий</label
												>
												<div class="mt-1">
													<textarea
														bind:value={comment}
														id="description"
														name="description"
														rows="4"
														class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
													/>
												</div>
											</div>
											<div />
											<!-- <fieldset>
						<legend class="text-sm font-medium text-gray-900">Privacy</legend>
						<div class="mt-2 space-y-5">
							<div class="relative flex items-start">
							<div class="absolute flex h-5 items-center">
								<input id="privacy-public" name="privacy" aria-describedby="privacy-public-description" type="radio" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500" checked>
							</div>
							<div class="pl-7 text-sm">
								<label for="privacy-public" class="font-medium text-gray-900">Public access</label>
								<p id="privacy-public-description" class="text-gray-500">Everyone with the link will see this project.</p>
							</div>
							</div>
							<div>
							<div class="relative flex items-start">
								<div class="absolute flex h-5 items-center">
								<input id="privacy-private-to-project" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500">
								</div>
								<div class="pl-7 text-sm">
								<label for="privacy-private-to-project" class="font-medium text-gray-900">Private to project members</label>
								<p id="privacy-private-to-project-description" class="text-gray-500">Only members of this project would be able to access.</p>
								</div>
							</div>
							</div>
							<div>
							<div class="relative flex items-start">
								<div class="absolute flex h-5 items-center">
								<input id="privacy-private" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500">
								</div>
								<div class="pl-7 text-sm">
								<label for="privacy-private" class="font-medium text-gray-900">Private to you</label>
								<p id="privacy-private-description" class="text-gray-500">You are the only one able to access this project.</p>
								</div>
							</div>
							</div>
						</div>
						</fieldset> -->
										</div>
										<!-- <div class="pt-4 pb-6">
						<div class="flex text-sm">
						<a href="#" class="group inline-flex items-center font-medium text-green-600 hover:text-green-900">
							<svg class="h-5 w-5 text-green-500 group-hover:text-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
							<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
							</svg>
							<span class="ml-2">Copy link</span>
						</a>
						</div>
						<div class="mt-4 flex text-sm">
						<a href="#" class="group inline-flex items-center text-gray-500 hover:text-gray-900">
							<svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
							</svg>
							<span class="ml-2">Learn more about sharing</span>
						</a>
						</div>
					</div> -->
									</div>
								</div>
							</div>
							<div class="flex flex-shrink-0 justify-end px-4 py-4">
								<button
									on:click={() => visibleFormMeasurement.update(invert)}
									type="button"
									class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
									>Отменить</button
								>
								<button
									type="submit"
									class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
									>Отправить</button
								>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
