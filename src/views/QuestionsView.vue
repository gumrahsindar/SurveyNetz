<script setup>
import { ref, reactive } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faPause, faVolumeHigh, faArrowsUpDown, faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { questions } from '@/data/questions.js'
import QuestionsForm from '@/components/QuestionsForm.vue'
import { useWindowSize } from '@vueuse/core'
import SubmitView from "@/views/SubmitView.vue";

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


// hide arrows on mobile
const hideArrows = ref(false)
const { width } = useWindowSize()
hideArrows.value = width.value < 1024;

// hide this page and show submit page when all questions are answered
const showSubmit = ref(false)
const handleLastQuestionAnswered = () => {
  showSubmit.value = true
}
</script>

<template>
  <div>
    <section class="questions"
             v-show="!showSubmit"
    >
      <!-- progress bar here -->
      <div class="progress-bar">
        <div class="progress">progress bar</div>
      </div>
      <!-- questions and answers -->
      <div class="container mx-auto">
        <article>
          <!-- question -->
          <h2 class="text-balance text-center font-bold leading-relaxed tracking-wide text-lg md:text-xl lg:text-2xl">
            Aşağıda verilen iki Perde<sup class="italic">Çeşni</sup> yapisi arasindaki geçişi dinleyerek, en
            yumuşak/akıcı/kolaydan en sert/ dramatik/zora doğru 1 ile 5 arası bir ölçekte notlandırabilir misiniz?
            <p>
              (1 en <span class="italic text-blue-400 underline">yumuşak</span>, 5 en
              <span class="italic text-red-400 underline">sert</span> geçiş)
            </p>
          </h2>
          <!-- examples container -->
          <div
              class="mt-14 flex flex-col items-center space-y-10 text-center lg:flex-row lg:justify-between lg:space-y-0 lg:text-left"
          >
            <!-- example-1 -->
            <div class="min-w-[35%] text-center">
              <h3 class="font-base text-2xl lg:text-3xl">
                {{ questions[currentQuestionIndex].root1
                }}<sup class="font-normal italic">{{ questions[currentQuestionIndex].pow1 }}</sup>
              </h3>
              <img class="mt-4 h-36 w-full rounded-2xl shadow-xl" :src="questions[currentQuestionIndex].image1" alt="" />
              <audio :ref="audioRefs[currentQuestionIndex][0]" @ended="isPlaying[0] = false">
                <source :src="questions[currentQuestionIndex].audio1" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button aria-label="play/pause" @click="togglePlayPause(currentQuestionIndex, 0)">
                <font-awesome-icon
                    class="text-dark-grey mt-4 lg:mt-8 h-16 w-16 cursor-pointer fill-current lg:scale-150 md:scale-125"
                    :icon="isPlaying[0] ? 'pause' : 'volume-high'"
                />
              </button>
            </div>
            <!-- arrows here -->
            <div>
              <font-awesome-icon
                  v-show="width < 1024"
                  class="h-32 w-32 text-purple/20 dark:text-purple/70"
                  :icon="'arrows-up-down'"
              />
              <FontAwesomeIcon
                  v-show="width >= 1024"
                  class="h-40 w-40 text-purple/20 dark:text-purple/70"
                  :icon="'arrows-left-right'"
              />
            </div>
            <!-- example-2 -->
            <div class="min-w-[35%] text-center">
              <h3 class="font-base text-xl md:text-2xl lg:text-3xl">
                {{ questions[currentQuestionIndex].root2
                }}<sup class="font-normal italic">{{ questions[currentQuestionIndex].pow2 }}</sup>
              </h3>
              <img class="mt-4 h-36 w-full rounded-2xl shadow-xl" :src="questions[currentQuestionIndex].image2" alt="" />
              <audio :ref="audioRefs[currentQuestionIndex][1]" @ended="isPlaying[1] = false">
                <source :src="questions[currentQuestionIndex].audio2" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button aria-label="play/pause" @click="togglePlayPause(currentQuestionIndex, 1)">
                <font-awesome-icon
                    class="text-dark-grey lg:mt-8 h-16 w-16 cursor-pointer fill-current lg:scale-150 md:scale-125"
                    :icon="isPlaying[1] ? 'pause' : 'volume-high'"
                />
              </button>
            </div>
          </div>
        </article>
        <QuestionsForm
            @last-question-answered="handleLastQuestionAnswered"
            :nextQuestion="nextQuestion" :currentQuestionIndex="currentQuestionIndex" :questions="questions"
            v-show="!showSubmit"
        />
      </div>
    </section>
    <SubmitView v-show="showSubmit" />
  </div>
</template>
