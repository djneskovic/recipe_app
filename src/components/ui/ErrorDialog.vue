<template>
	<v-dialog v-model="dialog" width="auto">
		<v-card color="oxfordBlue">
			<v-card-text>
				Something went wrong. <br />
				Please fill all your inputs.
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
		dialog() {
			return this.$store.getters["addIngridiens/getErrorDialog"];
		},
	},

	methods: {
		closeDialog() {
			this.$store.commit("addIngridiens/CLOSE_ERROR_DIALOG");
		},
	},
};
</script>
