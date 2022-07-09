<template>
  <header class="bg-[black]">
    <div
      class="max-w-[1440px] mx-auto flex flex-row justify-between items-start lg:items-center py-3 lg:py-6 px-4 lg:px-16"
    >
      <div class="flex lg:items-center mb-4 lg:mb-0">
        <nuxt-link class="mr-4 mt-2 lg:mt-0 shrink-0" to="/">
          <img :src="logo" alt="Voicer logo" />
        </nuxt-link>

        <div>
          <div class="flex items-center">
            <span class="text-grey font-bold text-lg mr-2">Voicer</span>
            <img :src="cloud" alt="cloud icon" />
          </div>

          <div
            class="flex flex-row flex-wrap lg:items-center text-grey text-xs"
          >
            <p class="mr-5 mt-2 lg:mt-0 lg:mr-0">22 raws</p>

            <div
              class="hidden lg:block h-1 w-1 rounded-full bg-grey mx-2"
            ></div>

            <p class="mt-2 lg:mt-0">Updated 18.06.2022</p>

            <div
              class="hidden lg:block h-1 w-1 rounded-full bg-grey mx-2"
            ></div>

            <p class="mt-2 lg:mt-0">
              <span>Created by</span>
              <a href="mailto:maximgonchar@gmail.com" class="text-blue ml-2"
                >maximgonchar@gmail.com</a
              >
            </p>
          </div>
        </div>
      </div>

      <UniversalShareBtn />
    </div>
  </header>
</template>

<script setup>
  const logo = '/img/logos/logo.svg'
  const cloud = '/img/header/cloud.svg'
</script>
