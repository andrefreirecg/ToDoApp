<template>
  <h1>
    Bem vindo(a) {{ user.name }}
  </h1>
  <div class="infos">
	<p>Você possui x tarefas pendentes</p>
	<p>Você possui x tarefas concluídas</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from 'vuex';

export default {
	name: 'HomeView',
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
.infos{
	max-width: 1024px;
	margin: 0 auto;
	
}
</style>
