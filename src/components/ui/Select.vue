<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'
import { Icon } from '@iconify/vue'

const experienceOptions = ['Beginner', 'Intermediate', 'Advanced']

const experienceModel = defineModel()
</script>

<template>
  <SelectRoot v-model="experienceModel">
    <SelectTrigger
      class="inline-flex h-[35px] w-full min-w-[160px] items-center justify-between gap-[5px] rounded-md bg-white px-[15px] font-rubik text-sm leading-none text-purple shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-purple data-[placeholder]:text-black/30"
      aria-label="Customise options"
    >
      <SelectValue placeholder="Lütfen bir seçim yapın" />
      <Icon icon="radix-icons:chevron-down" class="h-5 w-5 text-purple" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100] min-w-[160px] rounded bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
        :side-offset="5"
      >
        <SelectScrollUpButton class="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in experienceOptions"
              :key="index"
              class="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-purple data-[disabled]:pointer-events-none data-[highlighted]:bg-purple/80 data-[disabled]:text-mauve8 data-[highlighted]:text-green1 data-[highlighted]:outline-none"
              :value="option"
              v-model="experienceModel"
            >
              <SelectItemIndicator class="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton class="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
          <Icon icon="radix-icons:chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style lang="scss" scoped></style>
