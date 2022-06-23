<template>
  <div class="comments flex items-center flex-wrap">
    <GeneralRecorderComment
      v-for="(comment, i) in comments"
      :key="i"
      :data="{ comment, id }"
    />

    <div
      v-if="
        (caption.length && !comments.length) ||
        (comments.length && comments.every(item => item.data.length))
      "
      class="min-w-[100px]"
    >
      <div
        class="add-comment overflow-hidden transition-all duration-500 bg-lightGrey h-0 w-[30px] hover:h-4 hover:w-[100px] hover:px-2 hover:text-grey rounded-[40px] text-transparent text-xs whitespace-nowrap"
        @click="addNewComment"
      >
        + add comment
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRecordStore } from '@/stores/recordStore'

  const recordStore = useRecordStore()

  const props = defineProps({
    id: { type: String, default: '' },
  })

  const caption = computed(
    () => recordStore.records.find((item) => item.id === props.id)?.caption
  )
  const comments = computed(
    () => recordStore.records.find((item) => item.id === props.id)?.comments
  )

  const addNewComment = () => recordStore.addNewComment(props.id)
</script>

<style lang="scss">
  .recorder-comment:hover ~ div .add-comment,
  .caption:hover + .comments .add-comment {
    @apply h-2.5;
  }
</style>
