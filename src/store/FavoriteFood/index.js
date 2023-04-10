export default {
	namespaced: true,

	state() {
		return {
			favoritesFoods: [],
			ing: [],
			favoriteInput: "",
			show: null,
		};
	},

	mutations: {
		GET_FOODS(state) {
			const localStorageItem = localStorage.getItem("foods");
			if (localStorageItem) {
				state.favoritesFoods = JSON.parse(localStorageItem);
			}
		},

		REMOVE_FAV(state, payload) {
			const favIndex = state.favoritesFoods.findIndex(
				(res) => res.id === payload
			);
			state.favoritesFoods.splice(favIndex, 1);
			localStorage.setItem(
				"foods",
				JSON.stringify(state.favoritesFoods)
			);
		},

		TOGGLE(state, payload) {
			state.show === payload
				? (state.show = null)
				: (state.show = payload);
		},

		FAVORITE_FOOD_INPUT(state, payload) {
			state.favoriteInput = payload;
		},
	},

	getters: {
		getFavoriteInput(state) {
			return state.favoriteInput;
		},

		getShow(state) {
			return state.show;
		},

		getFavoritesFilter(state) {
			if (state.favoriteInput.trim().length > 0) {
				return state.favoritesFoods.filter((food) =>
					food.name
						.toLowerCase()
						.includes(
							state.favoriteInput.trim().toLowerCase()
						)
				);
			}
			return state.favoritesFoods;
		},
	},
};
