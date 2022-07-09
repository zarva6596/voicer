<template>
  <div>
    <GeneralRecorder
      v-for="item in records"
      :key="item.id"
      :item="item"
      class="mb-2.5"
    />

    <UniversalAddRecord />
  </div>
</template>

<script setup>
  import { useRecordStore } from '../stores/recordStore'

  const store = useRecordStore()
  const records = store.records
</script>
