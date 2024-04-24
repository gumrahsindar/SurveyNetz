<script setup>
import { ref, computed } from 'vue'

import ComboBox from '../components/ui/ComboBox.vue'
import Select from '../components/ui/Select.vue'
import QuestionsView from './QuestionsView.vue'

const experience = ref()
const instruments = ref([])
const instrument = [
  'Bağlama',
  'Çello',
  'Flüt',
  'Gitar',
  'Kanun',
  'Kaval',
  'Keman',
  'Kemençe',
  'Klarnet',
  'Ney',
  'Piyano',
  'Tanbur',
  'Ud',
  'Vurmalı Çalgılar',
  'Zurna',
  'Diğer (Türk Müziği)',
  'Diğer (Batı Müziği)',
]
const age = ref('')
const error = ref(false)
const hideHome = ref(false)

// form controller
const isFormValid = computed(() => {
  return experience.value && instruments.value.length && age.value
})

// collect form data
const homeFormData = ref({
  experience: '',
  instruments: [],
  age: '',
})

const handleFormSubmit = () => {
  error.value = false
  if (!isFormValid.value) {
    error.value = true
    return
  }

  homeFormData.value = {
    experience: experience.value,
    instruments: instruments.value,
    age: age.value,
  }

  hideHome.value = true
  error.value = false
}
</script>

<template>
  <section
    v-show="!hideHome"
    id="home"
    class="mt-10 flex flex-col justify-start gap-y-10 lg:mt-20 lg:flex-row lg:justify-around lg:gap-y-0"
  >
    <!-- Welcome  -->
    <div class="max-w-[35ch]">
      <h1 class="mb-4 text-4xl font-light leading-normal md:text-5xl lg:text-6xl">
        Anket uygulamamıza <span class="block font-medium">Hoş Geldiniz!</span>
      </h1>
      <small class="text-xs italic md:text-base lg:text-lg">Başlamadan önce lütfen formu doldurun.</small>
    </div>
    <!-- Form -->
    <form @submit.prevent="handleFormSubmit" class="w-full max-w-[35ch] text-sm md:text-base lg:text-lg">
      <div class="flex flex-col justify-between gap-1">
        <p>Müzik eğitiminiz nedir?</p>
        <Select id="name" v-model="experience" />
        <p class="mt-6">İcrâ ettiğiniz enstrüman/enstrümanlar?</p>
        <ComboBox v-model="instruments" :options="instrument" />
        <small v-if="instruments.length > 0" class="ml-1 text-sm md:text-base lg:text-lg">
          Seçilenler:
          <span class="italic underline">
            {{ instruments.join(', ') }}
          </span>
        </small>
        <label for="age" class="mt-6">Yaşınız</label>
        <input
          v-model="age"
          type="number"
          min="18"
          max="100"
          id="age"
          name="age"
          class="w-full rounded-md px-4 py-2 text-sm outline-purple placeholder:text-black/30 md:text-base dark:text-dark-blue"
          placeholder="Lütfen yaşınızı girin"
        />
        <div class="mt-6">
          <small v-show="error" class="text-middleRed">Lütfen tüm alanları doldurun.</small>
          <button
            type="submit"
            class="btn w-full cursor-pointer rounded-lg bg-purple px-4 py-3 text-lg text-white duration-200 hover:bg-purple/50"
          >
            Ankete Başla
          </button>
        </div>
      </div>
    </form>
  </section>
  <QuestionsView v-show="hideHome" :homeFormData="homeFormData" />
</template>
