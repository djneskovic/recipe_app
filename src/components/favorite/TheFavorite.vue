<template>
	<v-card
		v-for="food in getFavoritesFilter"
		:key="food.id"
		:name="food.name"
		:ingridiens="food.ingridiens"
		:description="food.description"
		color="oxfordBlue"
		class="text-khaki card"
		width="400"
	>
		<v-card-title class="text-bittersweet font-weight-bold">
			{{ food.name }}
		</v-card-title>

		<v-card-actions>
			<v-btn @click="removeFav(food.id)" class="btn-remove">
				Delete
			</v-btn>

			<v-spacer></v-spacer>

			<v-btn
				:icon="food.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
				@click="toggleShow(food.id)"
			></v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-if="food.show" class="pera">
				<v-divider></v-divider>

				<v-list density="compact" class="list">
					<v-list-item
						v-for="ing in food.ingridiens"
						:key="ing"
						width="100%"
						class="list-item"
						>{{ ing }}</v-list-item
					>
				</v-list>
				<v-divider></v-divider>

				<v-card-text>
					<span>Description:</span> <br />
					{{ food.description }}
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<script>
export default {
	computed: {
		getFavorites() {
			return this.$store.getters["favorites/getFoods"];
		},

		getShow() {
			return this.$store.getters["addIngridiens/getShow"];
		},

		getFavoritesFilter() {
			return this.$store.getters["favorites/getFavoritesFilter"];
		},
	},

	methods: {
		getFood() {
			this.$store.commit("favorites/GET_FOODS");
		},

		removeFav(id) {
			this.$store.commit("favorites/REMOVE_FAV", id);
		},

		toggleShow(id) {
			this.$store.commit("favorites/TOGGLE_SHOW", id);
		},
	},

	created() {
		this.getFood();
	},
};
</script>

<style scoped>
.card {
	position: relative;
}

span {
	font-size: 1.25rem;
	font-weight: bold;
	color: #f87060;
}

.list {
	background-color: #cdd7d6;
	color: #102542;
}

.btn-remove {
	font-size: 14px;
	margin-left: 0.5rem;
	transform: perspective(200px) rotateX(15deg);
	color: white;
	font-weight: 900;
	border: none;
	border-radius: 5px;
	background: #f87060;
	box-shadow: rgba(63, 94, 251, 0.2) 0px 40px 29px 0px;
	will-change: transform;
	transition: all 0.3s;
	border-bottom: 2px solid #f87060;
}

.btn-remove:hover {
	transform: perspective(180px) rotateX(30deg) translateY(2px);
}

.btn-remove:active {
	transform: perspective(170px) rotateX(36deg) translateY(5px);
}
</style>
