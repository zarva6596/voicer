<template>
  <span
    class="relative recorder-comment text-[10px] py-0.5 px-2 rounded-[6px] my-0.5 mr-1.5 min-w-[17px] min-h-[18px]"
  >
    {{ data.comment.data }}
    <textarea
      :value="data.comment.data"
      class="absolute h-full w-full left-0 top-0 bg-transparent py-0.5 px-2"
      @keypress="removeEnter"
      @input="changeComment($event.target.value, data.id, data.comment.id)"
    ></textarea>
  </span>
</template>

<script setup>
  import { removeEnter } from '~/utils';
  import { useRecordStore } from '~/stores/recordStore'
  const { changeComment } = useRecordStore()

  defineProps({
    data: {
      type: Object,
      default: () => ({ comment: '', id: '' })
    }
  })
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
