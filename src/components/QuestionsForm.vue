<script setup>
import { ref } from 'vue'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from "@/db/firebase.js";

const props = defineProps(['nextQuestion', 'currentQuestionIndex', 'questions', 'homeFormData'])

const vote = ref('')
const error = ref(false)

const answers = ref([])

const emit = defineEmits(['last-question-answered'])

const handleSubmit = async (e) => {
  e.preventDefault()
  error.value = false
  if (!vote.value) {
    error.value = true
    return
  }
  answers.value.push(vote.value)

  if (props.currentQuestionIndex === props.questions.length - 1) {
    emit('last-question-answered')

    // Combine homeFormData and answers into one object
    const surveyData = {
      ...props.homeFormData,
      answers: answers.value,
      createdAt: serverTimestamp(),
    }

    // Add the survey data to the 'answers' collection in Firestore
    try {
      await addDoc(collection(db, "answers"), surveyData);
      console.log("Survey submitted successfully.");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  vote.value = ''
}

</script>

<template>
  <form class="my-20" @submit.prevent="handleSubmit">
    <!-- vote for 1 to 5 with radio buttons -->
    <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
      <label
        class="cursor-pointer rounded-lg bg-blue-400 px-10 py-2 text-blue-50 md:text-lg lg:text-2xl"
        :class="vote === '1' ? 'outline outline-4 outline-blue-600' : ''"
      >
        <input class="sr-only checked:bg-amber-400" type="radio" name="vote" value="1" v-model="vote" />
        1
      </label>
      <label
        class="cursor-pointer rounded-lg bg-teal-400 px-10 py-2 text-teal-50 md:text-lg lg:text-2xl"
        :class="vote === '2' ? 'outline outline-4 outline-teal-600' : ''"
      >
        <input class="sr-only" type="radio" name="vote" value="2" v-model="vote" />
        2
      </label>
      <label
        class="cursor-pointer rounded-lg bg-yellow-400 px-10 text-yellow-50 py-2 md:text-lg lg:text-2xl"
        :class="vote === '3' ? 'outline outline-4 outline-yellow-600' : ''"
      >
        <input class="sr-only" type="radio" name="vote" value="3" v-model="vote" />
        3
      </label>
      <label
        class="cursor-pointer rounded-lg bg-orange-400 px-10 py-2 text-orange-50 md:text-lg lg:text-2xl"
        :class="vote === '4' ? 'outline outline-4 outline-orange-600' : ''"
      >
        <input class="sr-only" type="radio" name="vote" value="4" v-model="vote" />
        4
      </label>
      <label
        class="cursor-pointer rounded-lg bg-red-400 px-10 text-red-50 py-2 md:text-lg lg:text-2xl"
        :class="vote === '5' ? 'outline outline-4 outline-red-600' : ''"
      >
        <input class="sr-only" type="radio" name="vote" value="5" v-model="vote" />
        5
      </label>
      <p
        v-if="error"
        class="text-middleRed text-center mt-4 block"
      >
        Lütfen bir seçim yapın.
      </p>
    </div>
    <div class="mt-10 w-full text-center lg:text-right">
      <button
        @click="vote && props.nextQuestion()"
        class="cursor-pointer rounded-lg bg-purple px-4 py-3 text-lg text-white duration-200 hover:bg-purple/50"
        type="submit"
      >
        {{ props.currentQuestionIndex < questions.length - 2 ? 'Kaydet ve Devam Et' : 'Anketi Gönder' }}
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
