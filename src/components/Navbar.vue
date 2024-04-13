<script setup>
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { ref } from 'vue'
const switchState = ref(false)
</script>

<template>
  <header class="mx-6 flex items-center justify-between py-4 md:mx-0 md:py-10 lg:py-20">
    <!-- logo -->
    <div class="flex items-center gap-2">
      <img src="/images/icon-accessibility.svg" alt="logo" />
      <h1>MakamNetx</h1>
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
        class="bg-purple data-[state=checked]:bg-purple focus-within:outline-purple relative flex h-[25px] w-[42px] cursor-default rounded-full shadow-sm"
      >
        <SwitchThumb
          class="my-auto block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
        />
      </SwitchRoot>
      <img :src="switchState ? '/images/icon-moon-light.svg' : '/images/icon-moon-dark.svg'" alt="dark mode icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
