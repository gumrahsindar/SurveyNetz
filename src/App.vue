<script setup>
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import QuestionsView from './views/QuestionsView.vue'
import SubmitView from './views/SubmitView.vue'

import { ref } from 'vue'

const showQuestions = ref(false)
const showSubmit = ref(false)
</script>

<template>
  <Navbar />
  <main class="mx-6 mt-8">
    <HomeView />
    <QuestionsView v-show="showQuestions" />
    <SubmitView v-show="showSubmit" />
  </main>
</template>

<style></style>
