<template>
	<div id="findMeals">
		<div class="container">
			<div class="findMeal">
				<h1>Find Meal</h1>
				<div class="favorite-input">
					<explore-food class="input"></explore-food>
				</div>
				<v-btn @click="findFood" class="btn-find">Find</v-btn>
				<div class="find-food-list">
					<find-food-card></find-food-card>
					<the-error></the-error>
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

.btn-find {
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

.btn-find::before {
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

.btn-find:hover::before {
	width: 100%;
}
</style>

<script>
import ExploreFood from "../ui/ExploreFood.vue";
import FindFoodCard from "../ui/FindFoodCard.vue";
import TheError from "../ui/TheError.vue";
export default {
	components: {
		ExploreFood,
		FindFoodCard,
		TheError,
	},

	methods: {
		findFood() {
			this.$store.dispatch("explore/getFoodList");
		},
	},
};
</script>
