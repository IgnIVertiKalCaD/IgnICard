import { createWebHistory, createRouter } from "vue-router"

const MainPage = () => import("@/components/pages/mainPage.vue")


const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/home",
    component: MainPage,
  }
  
  //   { path: '/:pathMatch(.*)*', component: error404 },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
