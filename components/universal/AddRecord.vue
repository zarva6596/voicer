<template>
  <button
    class="addNewRecord m-4 rounded-full h-8 w-8 border-2 border-solid border-micGrey flex items-center justify-center transition-all duration-500 hover:border-black"
    @click="addRecord"
  >
    <img
      src="assets/img/icons/plus.svg"
      alt="Plus icon"
      class="opacity-30 transition-all duration-500"
    />
  </button>
</template>

<script setup>
  import { useRecordStore } from '../../stores/recordStore'

  const { addRecord } = useRecordStore()
</script>

<style lang="scss">
  .addNewRecord:hover img {
    @apply opacity-100;
  }
</style>
