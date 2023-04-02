<template>
	<input
		type="text"
		autocomplete="off"
		name="text"
		class="input"
		placeholder="Find your meal"
		v-model="inputFavorite"
	/>
</template>

<script>
export default {
	computed: {
		inputFavorite: {
			get() {
				return this.$store.getters["favorites/getFavoriteInput"];
			},
			set(newValue) {
				this.$store.commit(
					"favorites/FAVORITE_FOOD_INPUT",
					newValue
				);
			},
		},
	},
};
</script>

<style scoped>
.input:focus {
	color: #102542;
}
</style>
