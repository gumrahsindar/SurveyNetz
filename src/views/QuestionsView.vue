<script setup>
import { ref, reactive } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faPause, faVolumeHigh, faArrowsUpDown, faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { questions } from '@/data/questions.js'
import QuestionsForm from '@/components/QuestionsForm.vue'

library.add(faPlay, faPause, faVolumeHigh, faArrowsUpDown, faArrowsLeftRight)

const isPlaying = ref([false, false])
const audioRefs = reactive(questions.map(() => [ref(null), ref(null)]))

const currentQuestionIndex = ref(0)

const togglePlayPause = (index, audioIndex) => {
  isPlaying.value[audioIndex] = !isPlaying.value[audioIndex]
  if (isPlaying.value[audioIndex]) {
    audioRefs[index][audioIndex].value.play()
  } else {
    audioRefs[index][audioIndex].value.pause()
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++
  }
}

const hideArrows = ref(false)
</script>

<template>
  <section class="questions">
    <!-- progress bar here -->
    <div class="progress-bar">
      <div class="progress">progress bar</div>
    </div>
    <!-- questions and answers -->
    <div class="container">
      <article>
        <!-- question -->
        <h2 class="leading-norma text-balance text-center font-bold tracking-wide">
          Aşağıda verilen iki Perde<sup class="italic">Çeşni</sup> yapisi arasindaki geçişi dinleyerek, en
          yumuşak/akıcı/kolaydan en sert/ dramatik/zora doğru 1 ile 5 arası bir ölçekte notlandırabilir misiniz?
          <p>
            (1 en <span class="italic text-blue-500 underline">yumuşak</span>, 5 en
            <span class="italic text-red-500 underline">sert</span> geçiş)
          </p>
        </h2>
        <!-- examples container -->
        <div
          class="mt-14 flex flex-col items-center space-y-10 text-center lg:flex-row lg:justify-between lg:space-y-0 lg:text-left"
        >
          <!-- example-1 -->
          <div class="min-w-[35%] text-center">
            <h3 class="font-base text-xl md:text-2xl lg:text-3xl">
              {{ questions[currentQuestionIndex].root1
              }}<sup class="font-normal italic">{{ questions[currentQuestionIndex].pow1 }}</sup>
            </h3>
            <img class="mt-4 w-full rounded-lg shadow-lg" :src="questions[currentQuestionIndex].image1" alt="" />
            <audio :ref="audioRefs[currentQuestionIndex][0]" @ended="isPlaying[0] = false">
              <source :src="questions[currentQuestionIndex].audio1" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button aria-label="play/pause" @click="togglePlayPause(currentQuestionIndex, 0)">
              <font-awesome-icon
                class="text-dark-grey mt-4 h-16 w-16 cursor-pointer fill-current"
                :icon="isPlaying[0] ? 'pause' : 'volume-high'"
              />
            </button>
          </div>
          <!-- arrows here -->
          <div>
            <font-awesome-icon v-show="hideArrows" class="h-40 w-32 text-purple/70" :icon="'arrows-up-down'" />
            <FontAwesomeIcon class="h-40 w-40 text-purple/70" :icon="'arrows-left-right'" />
          </div>
          <!-- example-2 -->
          <div class="min-w-[35%] text-center">
            <h3 class="font-base text-xl md:text-2xl lg:text-3xl">
              {{ questions[currentQuestionIndex].root2
              }}<sup class="font-normal italic">{{ questions[currentQuestionIndex].pow2 }}</sup>
            </h3>
            <img class="mt-4 w-full rounded-lg shadow-lg" :src="questions[currentQuestionIndex].image2" alt="" />
            <audio :ref="audioRefs[currentQuestionIndex][1]" @ended="isPlaying[1] = false">
              <source :src="questions[currentQuestionIndex].audio2" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button aria-label="play/pause" @click="togglePlayPause(currentQuestionIndex, 1)">
              <font-awesome-icon
                class="text-dark-grey mt-4 h-16 w-16 cursor-pointer fill-current"
                :icon="isPlaying[1] ? 'pause' : 'volume-high'"
              />
            </button>
          </div>
        </div>
        <button @click="nextQuestion">Kaydet ve Devam Et</button>
      </article>
      <QuestionsForm />
    </div>
  </section>
</template>
