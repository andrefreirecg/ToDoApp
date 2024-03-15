<template>
	<router-link to="/" class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100 logo-img">
		<img src="/todoapp-logo.svg" alt="Todo app Logo" />
	</router-link>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
	name: 'Logo',
	components: {
		RouterLink
	},
	setup() {
		return {};
	}

}
</script>

<style lang="scss" scoped>
	.logo-img {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
