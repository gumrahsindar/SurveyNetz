<script setup>
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { ref, watch } from 'vue'

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
const switchState = ref(prefersDarkScheme)

watch(switchState, (newState) => {
  if (newState) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <header class="mx-6 flex items-center justify-between py-4 md:mx-0 md:py-10">
    <!-- logo -->
    <div class="flex items-center gap-2">
      <img src="/images/icon-accessibility.svg" alt="logo" />
      <h1>MakamNetz</h1>
    </div>
    <!-- dark mode -->
    <div class="flex items-center gap-4">
      <label class="sr-only select-none pr-4 text-[15px] leading-none text-white" for="dark-light-mode">
        switch dark/light mode
      </label>
      <img :src="switchState ? '/images/icon-sun-light.svg' : '/images/icon-sun-dark.svg'" alt="light mode icon" />
      <SwitchRoot
        id="dark-light-mode"
        v-model:checked="switchState"
        class="relative flex h-[22px] w-[40px] cursor-default rounded-full bg-purple shadow-sm focus-within:outline-purple data-[state=checked]:bg-purple"
      >
        <SwitchThumb
          class="my-auto block h-[18px] w-[18px] translate-x-0.5 rounded-full bg-white shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
        />
      </SwitchRoot>
      <img :src="switchState ? '/images/icon-moon-light.svg' : '/images/icon-moon-dark.svg'" alt="dark mode icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
