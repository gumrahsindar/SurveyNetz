<script setup>
import { ref } from 'vue'

const vote = ref('')

const handleSubmit = () => {
  console.log(vote.value)
}
</script>

<template>
  <form class="mt-10" @submit.prevent="handleSubmit">
    <!-- vote for 1 to 5 with radio buttons -->
    <div class="flex justify-center space-x-4">
      <label class="cursor-pointer bg-blue-400 px-5 py-1">
        <input class="sr-only" type="radio" name="vote" value="1" v-model="vote" />
        1
      </label>
      <label>
        <input type="radio" name="vote" value="2" v-model="vote" />
        2
      </label>
      <label>
        <input type="radio" name="vote" value="3" v-model="vote" />
        3
      </label>
      <label>
        <input type="radio" name="vote" value="4" v-model="vote" />
        4
      </label>
      <label>
        <input type="radio" name="vote" value="5" v-model="vote" />
        5
      </label>
    </div>
    <button
      class="btn w-fit cursor-pointer rounded-lg bg-purple px-4 py-3 text-lg text-white duration-200 hover:bg-purple/50"
      type="submit"
    >
      Kaydet ve Devam Et
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
