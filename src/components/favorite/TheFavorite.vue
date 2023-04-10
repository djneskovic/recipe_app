<template>
	<v-card color="oxfordBlue" class="text-khaki card" width="400">
		<v-card-title class="text-bittersweet font-weight-bold">
			{{ name }}
		</v-card-title>

		<v-card-actions>
			<v-btn @click="$emit('remove-fav')" class="btn-remove">
				Delete
			</v-btn>

			<v-spacer></v-spacer>

			<v-btn
				:icon="
					getShow === id ? 'mdi-chevron-up' : 'mdi-chevron-down'
				"
				@click="$emit('toggle-list')"
			></v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-if="getShow === id">
				<v-divider></v-divider>

				<v-list density="compact" class="list">
					<v-list-item
						v-for="ing in ings"
						:key="ing"
						width="100%"
						class="list-item"
						>{{ ing }}</v-list-item
					>
				</v-list>
				<v-divider></v-divider>

				<v-card-text>
					<span>Description: </span>
					<br />
					{{ desc }}
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<script>
export default {
	props: ["id", "name", "desc", "ings"],
	emits: ["remove-fav", "toggle-list"],

	computed: {
		getShow() {
			return this.$store.getters["favorites/getShow"];
		},
	},
};
</script>

<style scoped>
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
