<template>
	<div id="findMeals">
		<div class="container">
			<div class="findMeal">
				<h1>Find Meal</h1>
				<div class="favorite-input">
					<explore-food class="input"></explore-food>
				</div>
				<v-btn @click="findFood">Find</v-btn>
				<div class="find-food-list">
					<find-food-card></find-food-card>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#findMeals {
	min-height: 100vh;
	background: url("../../assets/bg.jpg") no-repeat;
	background-position: center center;
	background-size: cover;
}

.container {
	max-width: 1640px;
	margin: 0 auto;
	overflow: hidden;
	height: 100%;
}

.findMeal {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
}

h1 {
	margin: 2rem 0;
	color: #cdd7d6;
}

.favorite-input {
	width: 70%;
	margin-bottom: 2rem;
}

.input {
	border: none;
	outline: none;
	border-radius: 15px;
	padding: 1em;
	background-color: #ccc;
	box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
	transition: 300ms ease-in-out;
	width: 100%;
}

.input:focus {
	background-color: white;
	transform: scale(1.05);
	/* box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff; */
}

.find-food-list {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
	width: 100%;
	padding: 0 2rem;
	margin-top: 1rem;
}
</style>

<script>
import ExploreFood from "../ui/ExploreFood.vue";
import FindFoodCard from "../ui/FindFoodCard.vue";
export default {
	components: {
		ExploreFood,
		FindFoodCard,
	},

	methods: {
		findFood() {
			this.$store.dispatch("explore/getFoodList");
		},
	},
};
</script>
