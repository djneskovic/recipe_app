<template>
	<input
		type="text"
		autocomplete="off"
		name="text"
		class="input"
		placeholder="Find your meal"
		v-model="inputFind"
	/>
</template>

<script>
export default {
	computed: {
		inputFind: {
			get() {
				return this.$store.getters["explore/getFindInput"];
			},
			set(newValue) {
				this.$store.commit("explore/INPUT_FIND", newValue);
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
