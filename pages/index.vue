<template>
  <div>
    <GeneralRecorder
      v-for="item in options"
      :key="item.id"
      :item="item"
      class="mb-2.5"
    />

    <UniversalAddRecord />
  </div>
</template>

<script setup>
  import { useRecordStore } from "../stores/recordStore";

  const recordStore = useRecordStore()

  definePageMeta({
    layout: 'custom',
  })

  const options = computed(() => recordStore.records)
</script>
