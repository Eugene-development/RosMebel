<script>
	export let content;
</script>


{#each content.types as { title, description, link, img }}
<section class="bg-white dark:bg-gray-900 my-12">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
            <a href="/{link}" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                Подробнее
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			</a>
            <button  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Записаться на замер
            </button> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img class="rounded-md shadow-xl" src="{img}" alt="mockup">
        </div>                
    </div>
</section>

{/each}











<div class="py-16 text-center bg-gray-100">
	<h2 class="text-base text-red-700 font-semibold tracking-wide uppercase">Рубрика</h2>
	<h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
		{content.mainText.h1}
	</h1>
	   <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
</div>

<div class="bg-gray-100 pt-10">
	<div
		class="max-w-3xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:grid-cols-2"
	>
		<div>
			<h2 class="max-w-3xl mx-auto text-2xl tracking-tight font-extrabold text-gray-800">
				{content.mainText.title}
			</h2>
			<!--            <h2 class="max-w-3xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-red-700 sm:text-3xl">Распашные шкафы и шкафы купе недорого и качественно</h2>-->
			<p class="mt-4 text-gray-500">{content.mainText.description}</p>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				{#each content.types as { title, description, link }}
					<a href="/{link}" class="border-t border-gray-200 pt-4">
						<p class=" text-gray-900 font-bold text-lg">{title}</p>
						<p class="mt-2 text-sm text-gray-500">{description}</p>
						<p class="mt-4 text-red-700 text-sm">Подробнее -></p>
					</a>
				{/each}
			</dl>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-4 lg:gap-6">
			{#each content.img as { path, alt }}
				<img class="bg-gray-100 rounded-lg h-52 w-auto" src={path} {alt} />
			{/each}
		</div>
	</div>
</div>
