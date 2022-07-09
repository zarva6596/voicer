<template>
  <div class="relative drop-menu">
    <div class="drop-menu__btn flex items-center cursor-pointer h-4">
      <div
        v-for="i in 3"
        :key="i"
        class="h-[3px] w-[3px] rounded-full bg-dropMenuBtn mx-[1.5px]"
      ></div>
    </div>

    <div
      class="absolute right-[-6px] lg:right-auto lg:left-[-6px] opacity-0 invisible hover:opacity-100 hover:visible transition-all duration-500"
      style="bottom: calc(100% + 0.5rem)"
    >
      <div class="px-0.5 py-2 rounded-[5px] bg-black flex items-center">
        <div
          class="px-2 text-white font-medium text-xs leading-4 whitespace-nowrap cursor-pointer"
          @click="removeItem(id)"
        >
          Видалити рядок
        </div>

        <div
          class="px-2 text-white font-medium text-xs leading-4 whitespace-nowrap cursor-pointer"
        >
          Видалити аудіозапис
        </div>
      </div>
    </div>

    <div
      class="absolute left-1/2 top-[-0.5rem] translate-x-[-50%] opacity-0 invisible transition-all duration-500"
    >
      <img :src="'/img/components/drop-menu/tail.svg'" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from '@vue/runtime-core'
  import { useRecordStore } from '~/stores/recordStore'

  const { removeItem } = useRecordStore()

  defineProps({
    id: { type: String as PropType<string>, default: '' },
  })
</script>

<style lang="scss">
  .drop-menu {
    &__btn {
      &:hover ~ div {
        @apply opacity-100 visible;
      }

      & ~ div:hover ~ div {
        @apply opacity-100 visible;
      }
    }
  }
</style>
