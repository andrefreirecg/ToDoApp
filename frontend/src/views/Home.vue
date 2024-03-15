<template>
  <h1>
    {{ user.name }}
  </h1>
</template>

<script>
import { computed } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from 'vuex';

export default {
	name: 'Home',
	setup() {
		const store = useStore();
		const user = computed(() => store.getters.getUser);
		return {
			user: user,
		};
	},
	computed: {
		...mapGetters(['isLoggedIn', 'getUser', 'getToken'])
	}
	
}

</script>

<style lang="scss" scoped>

</style>
