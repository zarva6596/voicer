<template>
  <header class="bg-[black]">
    <div class="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-4 lg:px-16">
      <div class="flex items-center">
        <nuxt-link class="mr-4" to="/">
          <img :src="logo" alt="Voicer logo" />
        </nuxt-link>

        <div>
          <div class="flex items-center">
            <span class="text-grey font-bold text-lg mr-2">Voicer</span>
            <img :src="cloud" alt="cloud icon" />
          </div>

          <div class="flex items-center text-grey text-xs">
            <p>22 raws</p>


            <div class="h-1 w-1 rounded-full bg-grey mx-2"></div>

            <p>Updated 18.06.2022</p>

            <div class="h-1 w-1 rounded-full bg-grey mx-2"></div>

            <p>
              <span>Created by</span>
              <a href="mailto:maximgonchar@gmail.com" class="text-blue ml-2">maximgonchar@gmail.com</a>
            </p>
          </div>
        </div>
      </div>


      <UniversalShareBtn />
    </div>
  </header>
</template>

<script setup>
  const logo = 'public/img/logos/logo.svg'
  const cloud = 'public/img/header/cloud.svg'
</script>
