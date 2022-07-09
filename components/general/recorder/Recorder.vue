<template>
  <div class="flex items-center">
    <div
      class="recording-item bg-itemGrey rounded-[30px] flex items-center p-2.5 pr-5 w-fit transition-all duration-500 relative"
    >
      <GeneralRecorderPlayer :id="item.id" />

      <div class="max-w-[344px]">
        <GeneralRecorderCaption :id="item.id" />

        <GeneralRecorderComments :id="item.id" />
      </div>

      <div
        class="shrink-0 transition-all duration-500"
        :class="item.fire ? 'w-[18px] ml-3' : 'w-0 opacity-0'"
      >
        <img class="h-full w-full object-contain" :src="fireIcon" alt="" />
      </div>
    </div>

    <div
      class="shrink-0 other-buttons flex items-center justify-center pl-4 opacity-0 invisible w-0 transition-all duration-500 hover:opacity-100 hover:visible hover:w-[72px]"
    >
      <UniversalFireBtn
        :id="item.id"
        class="transition-all duration-500"
        :class="item.fire ? 'w-0 opacity-0' : 'mr-5 w-[18px]'"
      />

      <UniversalDropMenu :id="item.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from '@vue/runtime-core'
  import { AudioRecording } from 'stores/recordStore'

  defineProps({
    item: { type: Object as PropType<AudioRecording>, default: () => {} },
  })

  const fireIcon = '/img/emoji/fire-icon.png'
</script>

<style lang="scss">
  .recording-item:hover + div.other-buttons {
    @apply opacity-100 visible w-fit;
  }
</style>
