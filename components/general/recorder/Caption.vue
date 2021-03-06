<template>
  <div class="relative caption overflow-hidden">
    <textarea
      :value="caption"
      type="text"
      placeholder="Add caption"
      class="bg-transparent placeholder:text-transparent absolute h-full w-full text-lg placeholder:whitespace-nowrap"
      @keypress="removeEnter"
      @input="changeCaption"
    ></textarea>
    <div
      class="rounded-lg overflow-hidden text-lg transition-all duration-500 flex items-center"
      :class="{
        'bg-capGrey text-transparent h-2 w-6 min-h-[8px] min-w-[24px]': !caption.length,
        'min-w-[101px] w-fit h-fit': caption.length
      }"
    >
      <p :class="{ hidden: !caption.length }">{{ caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { removeEnter, stopStringLength } from '~/utils';
  import { useRecordStore } from '@/stores/recordStore';
  import { computed } from "vue";

  const recordStore = useRecordStore()

  const props = defineProps({
    id: {  type: String, default: '' },
  })

  const item = computed(() => recordStore.records.find(item => item.id === props.id))
  const caption = computed(() => item.value.caption)

  const changeCaption = e => recordStore.changeCaption(item.value.id, e.target.value)
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
