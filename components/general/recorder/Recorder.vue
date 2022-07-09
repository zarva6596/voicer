<template>
  <div class="flex items-center">
    <div
      class="bg-itemGrey rounded-[30px] flex items-center p-2.5 pr-5 w-fit transition-all duration-500"
    >
      <GeneralRecorderPlayer :id="item.id" />

      <div class="max-w-[344px]">
        <GeneralRecorderCaption :id="item.id" />

        <GeneralRecorderComments :id="item.id" />
      </div>

      <div
        class="transition-all duration-500"
        :class="item.fire ? 'w-[18px] ml-3' : 'w-0 opacity-0'"
      >
        <img class="h-full w-full object-contain" :src="fireIcon" alt="" />
      </div>
    </div>

    <div class="flex items-center justify-center px-4">
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
