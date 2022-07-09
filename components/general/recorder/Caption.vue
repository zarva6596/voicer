<template>
  <div class="relative caption overflow-hidden">
    <textarea
      :value="caption"
      type="text"
      placeholder="Add caption"
      class="bg-transparent placeholder:text-transparent absolute h-full w-full lg:text-lg placeholder:whitespace-nowrap"
      @keypress="removeEnter"
      @input="changeCap"
    ></textarea>
    <div
      class="rounded-lg overflow-hidden lg:text-lg transition-all duration-500 flex items-center"
      :class="{
        'bg-capGrey text-transparent h-2 w-6 min-h-[8px] min-w-[24px]':
          !caption.length,
        'min-w-[101px] w-fit h-fit': caption.length,
      }"
    >
      <p :class="{ hidden: !caption.length }">{{ caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AudioRecording, useRecordStore } from '@/stores/recordStore'
  import { PrintData } from '~/utils'
  import { removeEnter } from '~/utils'
  import { computed } from 'vue'
  import { PropType } from '@vue/runtime-core'

  const recordStore = useRecordStore()

  const props = defineProps({
    id: { type: String as PropType<string>, default: '' },
  })

  const item = computed(() =>
    recordStore.records.find((item: AudioRecording) => item.id === props.id)
  )
  const caption = computed(() => item.value && item.value.caption)

  const changeCap = (e: PrintData) =>
    item.value && recordStore.changeCaption(item.value.id, e.target.value)
</script>

<style lang="scss">
  .caption {
    &:hover textarea::placeholder {
      @apply text-micGrey;
    }

    textarea {
      resize: none;

      &:hover,
      &:focus {
        -moz-appearance: none;
        outline: 0 none transparent;
        @apply placeholder:text-micGrey;

        & + div {
          @apply min-w-[101px] min-h-[25px] bg-transparent;
        }
      }
    }
  }
</style>
