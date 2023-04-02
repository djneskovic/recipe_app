<template>
	<div id="hero">
		<div class="hero">
			<the-dialog> </the-dialog>
			<error-dialog></error-dialog>
		</div>
		<div class="favorites">
			<div class="favoriteInput">
				<favorite-input class="input"></favorite-input>
			</div>
			<div class="favorite">
				<the-favorite></the-favorite>
			</div>
		</div>
	</div>
</template>

<style scoped>
#hero {
	min-height: 100vh;
	overflow: hidden;
	background: url("../../assets/bg.jpg") no-repeat;
	background-position: center center;
	background-size: cover;
}

.hero {
	padding: 2rem 3rem;
	max-width: 1400px;
	margin: 0 auto;
}

.favorite {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	padding: 0 3rem;
	width: 100%;
}

@media screen and (max-width: 1328px) {
	.favorite {
		justify-content: center;
	}
}
.favorites {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1400px;
	margin: 0 auto 2rem;
	/* overflow: hidden; */
	/* min-height: 100vh; */
}

.favoriteInput {
	width: 70%;
	margin: 1rem 0 2rem;
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
</style>

<script>
import TheFavorite from "../favorite/TheFavorite.vue";
import TheDialog from "../ui/TheDialog.vue";
import ErrorDialog from "../ui/ErrorDialog.vue";
import FavoriteInput from "../ui/FavoriteInput.vue";

export default {
	components: {
		TheFavorite,
		TheDialog,
		ErrorDialog,
		FavoriteInput,
	},

	computed: {
		getFavoriteFood() {
			return this.$store.getters["addIngridiens/getFavoritesFood"];
		},
	},

	created() {
		this.getFavoriteFood;
	},
};
</script>

<style scoped></style>
