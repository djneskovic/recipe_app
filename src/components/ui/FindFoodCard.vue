<template>
	<v-card
		width="500"
		color="oxfordBlue"
		v-for="meal in getMeals"
		:key="meal.idMeal"
		class="card"
	>
		<div class="front">
			<v-card-text>
				<p class="text-h5 text-khaki">{{ meal.strMeal }}</p>
				<p style="margin: 0.5rem 0" class="text-bittersweet">
					{{ meal.strCategory }}
				</p>
				<p class="text-h6 text-mintCream">Ingrediens</p>
				<div class="text--primary">
					{{ meal.strMeasure1 }} {{ meal.strIngredient1 }}
					<span v-if="meal.strIngredient2">-</span>
					{{ meal.strMeasure2 }} {{ meal.strIngredient2 }}
					<span v-if="meal.strIngredient3">-</span>
					{{ meal.strMeasure3 }} {{ meal.strIngredient3 }}
					<span v-if="meal.strIngredient4">-</span>
					{{ meal.strMeasure4 }} {{ meal.strIngredient4 }}
					<span v-if="meal.strIngredient5">-</span>
					{{ meal.strMeasure5 }} {{ meal.strIngredient5 }}
					<span v-if="meal.strIngredient6">-</span>
					{{ meal.strMeasure6 }} {{ meal.strIngredient6 }}
					<span v-if="meal.strIngredient7">-</span>
					{{ meal.strMeasure7 }} {{ meal.strIngredient7 }}
					<span v-if="meal.strIngredient8">-</span>
					{{ meal.strMeasure8 }} {{ meal.strIngredient8 }}
					<span v-if="meal.strIngredient9">-</span>
					{{ meal.strMeasure9 }} {{ meal.strIngredient9 }}
					<span v-if="meal.strIngredient10">-</span>
					{{ meal.strMeasure10 }} {{ meal.strIngredient10 }}
					<span v-if="meal.strIngredient11">-</span>
					{{ meal.strMeasure11 }} {{ meal.strIngredient11 }}
					<span v-if="meal.strIngredient12">-</span>
					{{ meal.strMeasure12 }} {{ meal.strIngredient12 }}
					<span v-if="meal.strIngredient13">-</span>
					{{ meal.strMeasure13 }} {{ meal.strIngredient13 }}
					<span v-if="meal.strIngredient14">-</span>
					{{ meal.strMeasure14 }} {{ meal.strIngredient14 }}
					<span v-if="meal.strIngredient15">-</span>-
					{{ meal.strMeasure15 }} {{ meal.strIngredient15 }}
					<span v-if="meal.strIngredient16">-</span>
					{{ meal.strMeasure16 }} {{ meal.strIngredient16 }}
					<span v-if="meal.strIngredient17">-</span>
					{{ meal.strMeasure17 }} {{ meal.strIngredient17 }}
					<span v-if="meal.strIngredient18">-</span>
					{{ meal.strMeasure18 }} {{ meal.strIngredient18 }}
					<span v-if="meal.strIngredient19">-</span>
					{{ meal.strMeasure19 }} {{ meal.strIngredient19 }}
					<span v-if="meal.strIngredient20">-</span>
					{{ meal.strMeasure20 }} {{ meal.strIngredient20 }}
				</div>

				<div class="how-to">
					<p class="text-h6 my-2 text-bittersweet">
						How to make?
					</p>
					<v-btn :href="meal.strSource" v-if="meal.strSource"
						>See here</v-btn
					>
					<p v-if="!meal.strSource" class="no-link">
						Sorry, no link found
					</p>
				</div>
			</v-card-text>
			<v-card-actions>
				<v-btn
					variant="text"
					color="teal-accent-2"
					@click="toggleReveal(meal.idMeal)"
				>
					Learn More
				</v-btn>
			</v-card-actions>
		</div>

		<v-expand-transition>
			<v-card
				v-if="getReveal === meal.idMeal"
				class="v-card--reveal"
				style="min-height: 100%"
				color="oxfordBlue"
			>
				<div>
					<v-card-text class="pb-0">
						<p
							class="text-h5 text-khaki"
							style="margin-bottom: 0.5rem"
						>
							Description
						</p>
						<p class="my-4">
							{{ meal.strInstructions }}
						</p>
					</v-card-text>
					<v-card-actions class="pt-0">
						<v-btn
							variant="text"
							color="teal-accent-2"
							@click="toggleReveal(meal.idMeal)"
						>
							Close
						</v-btn>
					</v-card-actions>
				</div>
			</v-card>
		</v-expand-transition>
	</v-card>
</template>

<script>
export default {
	computed: {
		getMeals() {
			return this.$store.getters["explore/getMeals"];
		},

		getIngrediens() {
			return this.$store.getters["explore/getIngredient"];
		},

		getReveal() {
			return this.$store.getters["explore/getReveal"];
		},
	},

	methods: {
		toggleReveal(id) {
			this.$store.commit("explore/TOGGLE_REVEAL", id);
		},
	},
};
</script>

<style scoped>
.v-card--reveal {
	bottom: 0;
	opacity: 1 !important;
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: scroll;
}

.card {
	min-height: 300px;
	margin-top: 1rem;
}

.front {
	min-height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0.5rem 0;
}

.how-to {
	margin: 1rem 0;
}

.box {
	background-color: red;
}

.no-link {
	color: #cdd7d6;
	font-size: 1.25rem;
}
</style>
