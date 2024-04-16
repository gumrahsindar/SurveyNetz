<script setup>
import { ProgressIndicator, ProgressRoot } from 'radix-vue'

const props = defineProps(['questions'])
const progressModel = defineModel()
</script>

<template>
  <ProgressRoot
      v-model="progressModel"
      class="relative overflow-hidden bg-gray-200 rounded-full w-full w-[300px] sm:w-[400px] md:w-[520px] lg:w-[800px] h-4 sm:h-5"
      style="transform: translateZ(0)"
  >
    <ProgressIndicator
        class="bg-purple/50 rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        :style="`transform: translateX(-${100 - progressModel}%)`"
    />
  </ProgressRoot>
</template>

<style scoped>

</style>