<template>
	<v-app>
		<the-nav></the-nav>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import TheNav from "./components/navigation/TheNav.vue";
export default {
	components: {
		TheNav,
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
