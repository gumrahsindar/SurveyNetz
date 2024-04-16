<script setup>
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
})
const instrumentsModel = defineModel()
</script>

<template>
  <ComboboxRoot v-model="instrumentsModel" class="relative text-sm" multiple>
    <ComboboxAnchor
      class="inline-flex h-[35px] w-full min-w-[160px] items-center justify-between gap-[5px] rounded-md bg-white px-[15px] text-[13px] text-sm leading-none text-purple shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-purple data-[placeholder]:text-purple md:text-base lg:text-lg"
    >
      <ComboboxInput
        class="h-full !bg-transparent text-purple outline-none selection:bg-white placeholder:text-sm placeholder:text-black/30 "
        placeholder="Lütfen bir seçim yapın"
      />
      <ComboboxTrigger>
        <Icon icon="radix-icons:chevron-down" class="h-5 w-5 text-purple" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent
      class="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade absolute z-10 mt-1 w-full min-w-[160px] overflow-hidden rounded bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
    >
      <ComboboxViewport class="scroll-auto p-[5px]">
        <ComboboxEmpty class="py-2 text-center text-xs font-medium text-mauve8" />

        <ComboboxGroup>
          <ComboboxItem
            v-for="(option, index) in props.options"
            :key="index"
            class="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] md:text-base leading-none text-purple data-[disabled]:pointer-events-none data-[highlighted]:bg-purple/80 data-[disabled]:text-mauve8 data-[highlighted]:text-grass1 data-[highlighted]:outline-none"
            :value="option"
          >
            <ComboboxItemIndicator class="absolute left-0 inline-flex w-[25px] items-center justify-center">
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
            <span>
              {{ option }}
            </span>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>

<style lang="scss" scoped></style>
