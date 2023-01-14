<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
  <div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Каталог мебели</h2>
        <p class="text-xl text-gray-500">Ознакомьтесь с нашими предложениями мебели из каталога.</p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <a href="/shkafy">
                            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="rounded-lg object-cover shadow-lg" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
              </div>
              <div class="space-y-1 text-2xl font-medium leading-6">
                <h3>Шкафы</h3>
                <!-- <p class="text-indigo-600">Senior Front-end Developer</p> -->
              </div>
              <div class="text-lg">
                <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
              </div>
            </div>

            </a>
          </li>
          <li>
            <a href="/kuhni">
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="rounded-lg object-cover shadow-lg" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
              </div>
              <div class="space-y-1 text-2xl font-medium leading-6">
                <h3>Кухонные гарнитуры</h3>
                <!-- <p class="text-indigo-600">Senior Front-end Developer</p> -->
              </div>
              <div class="text-lg">
                <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
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
