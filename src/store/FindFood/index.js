import axios from "axios";

export default {
	namespaced: true,

	state() {
		return {
			inputFind: "",
			meals: [],
			ingrediens: [],
			reveal: null,
			dialog: false,
		};
	},

	getters: {
		getFindInput(state) {
			return state.inputFind;
		},

		getMeals(state) {
			return state.meals;
		},

		getIngredient(state) {
			return state.ingrediens;
		},

		getReveal(state) {
			return state.reveal;
		},

		getError(state) {
			return state.dialog;
		},
	},

	mutations: {
		INPUT_FIND(state, payload) {
			state.inputFind = payload;
		},

		MEAL_INFO(state, payload) {
			const meal = payload.meals;
			meal.forEach((a) => {
				state.meals.push(a);
			});
			state.inputFind = "";
		},

		TOGGLE_REVEAL(state, payload) {
			state.reveal === payload
				? (state.reveal = null)
				: (state.reveal = payload);
		},

		ERROR(state) {
			state.dialog = true;
		},

		CLOSE_DIALOG(state) {
			state.dialog = false;
		},
	},

	actions: {
		getFoodList(context) {
			context.state.meals = [];
			if (!context.state.inputFind) return;
			axios.get(
				`https://themealdb.com/api/json/v1/1/search.php?s=${context.getters.getFindInput}`
			)
				.then((res) => {
					context.commit("MEAL_INFO", res.data);
				})
				.catch(() => {
					console.log("Greska");
					context.commit("ERROR");
					context.state.inputFind = "";
				});
		},
	},
};
