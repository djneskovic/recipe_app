<template>
	<v-row justify="center">
		<v-dialog v-model="getDialog" persistent width="800">
			<template v-slot:activator="{ props }">
				<v-btn v-bind="props" @click="openDialog" class="btn-enter">
					Enter your meal
				</v-btn>
			</template>
			<v-card color="oxfordBlue">
				<v-card-title class="mt-4">
					<span class="text-h5 text-bittersweet"
						>Add New Recipe</span
					>
				</v-card-title>

				<v-col align="center">
					<v-row class="pa-8">
						<v-col cols="12">
							<v-text-field
								label="Food Name"
								placeholder="What is a food name"
								variant="outlined"
								v-model="inputName"
								class="text-khaki"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								label="Ingridiens"
								placeholder="Enter your ingridiens"
								variant="outlined"
								v-model.trim="inputText"
								class="text-khaki"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-btn
								class="btn-enter"
								@click="addIngridien"
								>Add</v-btn
							>
						</v-col>
					</v-row>
				</v-col>

				<v-list density="compact" class="pa-8 list">
					<v-list-item
						@click="removeAddedIngridien(ing)"
						class="list-item"
						v-for="ing in getIngridiensArray"
						:key="ing"
						>{{ ing }}
					</v-list-item>
				</v-list>

				<v-textarea
					label="Description"
					variant="outlined"
					class="pa-8 text-khaki"
					v-model.trim="inputDescription"
				></v-textarea>

				<v-card-actions class="btn-center">
					<v-btn
						color="platinum"
						variant="text"
						@click="addToLocalStorage"
					>
						Save
					</v-btn>
					<v-btn
						color="bittersweet"
						variant="text"
						@click="closeDialog"
					>
						Cancel
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
export default {
	computed: {
		inputText: {
			get() {
				return this.$store.getters["addIngridiens/getInputText"];
			},
			set(newValue) {
				this.$store.commit("addIngridiens/INPUT_TEXT", newValue);
			},
		},

		inputName: {
			get() {
				return this.$store.getters["addIngridiens/getInputName"];
			},
			set(newValue) {
				this.$store.commit("addIngridiens/INPUT_NAME", newValue);
			},
		},

		inputDescription: {
			get() {
				return this.$store.getters[
					"addIngridiens/getInputDescription"
				];
			},
			set(newValue) {
				this.$store.commit(
					"addIngridiens/INPUT_DESCRIPTION",
					newValue
				);
			},
		},

		getIngridiensArray() {
			return this.$store.getters["addIngridiens/getIngridiens"];
		},

		getDialog() {
			return this.$store.getters["addIngridiens/getDialog"];
		},
	},

	methods: {
		addIngridien() {
			this.$store.dispatch("addIngridiens/addIngridien");
		},

		removeAddedIngridien(ing) {
			this.$store.commit("addIngridiens/REMOVE_ADDED_INGRIDIEN", ing);
		},

		openDialog() {
			this.$store.commit("addIngridiens/OPEN_DIALOG");
		},

		closeDialog() {
			this.$store.commit("addIngridiens/CLOSE_DIALOG");
		},

		addToLocalStorage() {
			this.$store.dispatch("addIngridiens/addToLocalStorage");
		},
	},
};
</script>

<style scoped>
.btn-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn-enter {
	position: relative;
	background-color: #102542;
	border-radius: 5px;
	background-repeat: no-repeat;
	box-sizing: border-box;
	color: #fff;
	border: none;
	font-size: 20px;
	transition: all 0.3s ease-in-out;
	z-index: 1;
	overflow: hidden;
}

.btn-enter::before {
	content: "";
	background-color: #f87060;
	width: 0;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	transition: width 500ms ease-in-out;
	display: inline-block;
}

.btn-enter:hover::before {
	width: 100%;
}

.list {
	background-color: #cdd7d6;
}

.list-item {
	background-color: #d7dfde;
	text-align: center;
	cursor: pointer;
}

.list-item:not(:first-child) {
	margin: 1rem 0;
}
</style>
