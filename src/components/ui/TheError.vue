<template>
	<v-dialog v-model="getError" width="auto">
		<v-card color="oxfordBlue">
			<v-card-text>
				No food found. Please check your input.
			</v-card-text>
			<v-card-actions>
				<v-btn color="bittersweet" block @click="closeDialog"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	computed: {
		getError() {
			return this.$store.getters["explore/getError"];
		},
	},

	methods: {
		closeDialog() {
			return this.$store.commit("explore/CLOSE_DIALOG");
		},
	},
};
</script>
