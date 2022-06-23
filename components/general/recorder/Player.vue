<template>
  <div
    class="
      flex
      justify-center
      items-center
      h-10
      mr-4
      rounded-full
      border-2
      border-solid
      transition-all
      duration-500
      cursor-pointer
      shrink-0
    "
    :class="{
      'w-10 border-micGrey hover:border-black': playerOptions.status === STATUS.START
    }"
  >
    <img src="../../../assets/img/recorder-item/mic.svg" alt="Mic icon" class="h-5 w-5" />
  </div>
</template>

<script setup lang="ts">
  // const STATUS =  {
  //   START: 'START',
  //   RECORD: 'RECORD'
  // }

  enum STATUS {
    START,
    RECORD,
    HAS,
    PLAY,
  }

  import { ref } from "vue";

  const props = defineProps({
    id: { type: String, default: () => null }
  })

  const playerOptions = ref({
    status: STATUS.START,
  })
</script>
