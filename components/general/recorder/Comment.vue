<template>
  <span
    class="relative recorder-comment text-[10px] py-0.5 px-2 rounded-[6px] my-0.5 mr-1.5 min-w-[17px] min-h-[18px]"
  >
    {{ data.comment.data }}
    <textarea
      :value="data.comment.data"
      class="absolute h-full w-full left-0 top-0 bg-transparent py-0.5 px-2"
      @keypress="checkButton"
      @keydown="checkButton"
      @input="changeComment($event.target.value, data.id, data.comment.id)"
    ></textarea>
  </span>
</template>

<script setup lang="ts">
  import { PrintData, removeEnter } from '~/utils'
  import { useRecordStore } from '~/stores/recordStore'
  import { PropType } from '@vue/runtime-core'
  const { changeComment } = useRecordStore()

  defineProps({
    data: {
      type: Object as PropType<object>,
      default: () => ({ comment: '', id: '' }),
    },
  })

  const emit = defineEmits(['enter', 'removeComment'])

  const checkButton = (e: PrintData) => {
    switch (e.keyCode) {
      case 13:
        e.preventDefault()
        emit('enter')
        break
      case 8:
        if (!e.target.value.length) emit('removeComment')
        break
    }
  }
</script>

<style lang="scss">
  .recorder-comment {
    @apply text-comment2n bg-commentBg;

    &:nth-of-type(2n) {
      @apply bg-commentBg2n;
    }

    textarea {
      resize: none;

      &:focus {
        outline: none;
      }
    }
  }
</style>
