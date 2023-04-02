import { createRouter, createWebHistory } from "vue-router";

import TheHero from "./components/hero/TheHero.vue";
import FindMeals from "./components/findMeals/FindMeals.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/mymeals" },
		{ name: "mymeals", path: "/mymeals", component: TheHero },
		{ name: "findmeals", path: "/findmeals", component: FindMeals },
	],
});

export default router;
