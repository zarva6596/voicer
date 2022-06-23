<template>
  <div class="bg-itemGrey rounded-[30px] flex items-center p-2.5 w-fit transition-all duration-500">
    <GeneralRecorderPlayer :id="item.id" />

    <div class="max-w-[344px]">
      <GeneralRecorderCaption :id="item.id" />

      <GeneralRecorderComments :id="item.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({ item: { type: Object, default: '' }})
</script>
