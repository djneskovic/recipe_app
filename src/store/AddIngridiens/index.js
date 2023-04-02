export default {
	namespaced: true,

	state() {
		return {
			dialog: false,
			errorDialog: false,
			show: false,
			inputText: "",
			inputName: "",
			inputDescription: "",
			ingridiens: [],
			food: [],
		};
	},

	mutations: {
		INPUT_TEXT(state, payload) {
			state.inputText = payload;
		},

		INPUT_NAME(state, payload) {
			state.inputName = payload;
		},

		INPUT_DESCRIPTION(state, payload) {
			state.inputDescription = payload;
		},

		ADD_INGRIDIENS(state) {
			if (!state.inputText) return;
			state.ingridiens.unshift(state.inputText);
		},

		REMOVE_ADDED_INGRIDIEN(state, payload) {
			const favIndex = state.ingridiens.findIndex(
				(res) => res === payload
			);
			state.ingridiens.splice(favIndex, 1);
		},

		CLOSE_DIALOG(state) {
			state.inputName = "";
			state.ingridiens = [];
			state.inputDescription = "";
			state.dialog = false;
		},

		OPEN_DIALOG(state) {
			state.dialog = true;
		},

		CLOSE_ERROR_DIALOG(state) {
			state.errorDialog = false;
		},

		SAVE_FOOD(state) {
			const foods = {
				id: Math.floor(Math.random() * 100),
				name: state.inputName,
				ingridiens: state.ingridiens,
				description: state.inputDescription,
				show: state.show,
			};

			if (
				!state.inputName ||
				!state.ingridiens.length ||
				!state.inputDescription
			) {
				state.errorDialog = true;
			} else {
				state.food.unshift(foods);
				localStorage.setItem("foods", JSON.stringify(state.food));
				state.inputName = "";
				state.ingridiens = [];
				state.inputDescription = "";
				state.dialog = false;
			}
		},
	},

	getters: {
		getDialog(state) {
			return state.dialog;
		},

		getInputText(state) {
			return state.inputText;
		},

		getInputName(state) {
			return state.inputName;
		},

		getInputDescription(state) {
			return state.inputDescription;
		},

		getIngridiens(state) {
			return state.ingridiens;
		},

		getErrorDialog(state) {
			return state.errorDialog;
		},

		getFavoritesFood(state) {
			return (state.food = JSON.parse(
				localStorage.getItem("foods") || "[]"
			));
		},

		getShow(state) {
			console.log(state.show);
			return state.show;
		},
	},

	actions: {
		addToLocalStorage(context) {
			context.commit("SAVE_FOOD");
		},

		addIngridien(context) {
			context.commit("ADD_INGRIDIENS");
			context.state.inputText = "";
		},
	},
};
