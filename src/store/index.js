import { createStore } from "vuex";
import addIngridiensModule from "./AddIngridiens/index.js";
import favoritesModule from "./FavoriteFood/index.js";
import exploreModule from "./FindFood/index.js";

const store = createStore({
	modules: {
		addIngridiens: addIngridiensModule,
		favorites: favoritesModule,
		explore: exploreModule,
	},
});

export default store;
