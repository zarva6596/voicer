<template>
  <div class="relative">
    <div class="flex items-center cursor-pointer">
      <div
        v-for="i in 3"
        :key="i"
        class="h-[3px] w-[3px] rounded-full bg-dropMenuBtn mx-[1.5px]"
      ></div>
    </div>
  </div>
</template>
