<template>
  <div class="h-[18px] w-[18px] cursor-pointer" @click="addFire(id)">
    <img
      class="h-full w-full object-contain"
      :src="image"
      alt="Fire icon button"
    />
  </div>
</template>

<script setup lang="ts">
  const image = '/img/components/fire-btn/fire-btn.svg'

  import { PropType } from '@vue/runtime-core'
  import { useRecordStore } from '@/stores/recordStore'

  const { addFire } = useRecordStore()

  const { id } = defineProps({
    id: { type: String as PropType<string>, default: '' },
  })
</script>
