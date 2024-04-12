import { createRouter, createWebHistory } from "vue-router";

// Views
import HomeView from "@/views/HomeView.vue";
import QuestionsView from "@/views/QuestionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/question/:id",
      name: "question",
      component: QuestionsView,
    },
  ],
});

export default router;
