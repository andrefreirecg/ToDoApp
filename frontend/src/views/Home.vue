<template>
	<h1>
		Bem vindo(a) {{ user.name }}
	</h1>
	<div class="infos">
		<p>Você possui <b>{{ tarefasPendentes }}</b> tarefas pendentes</p>
		<p>Você possui <b>{{ tarefasConcluidas }}</b> tarefas concluídas</p>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'HomeView',
	setup() {
		const store = useStore();
		store.dispatch('sincronizeTarefas', store.getters.getUser.id);

		const tarefasPendentes = computed(() => {
			let doneTasks = store.getters.getTasks.tasks.filter((task) => task.done);
			return doneTasks.length;
		});

		const tarefasConcluidas = computed(() => {
			let doneTasks = store.getters.getTasks.tasks.filter((task) => !task.done);
			return doneTasks.length;
		});

		const user = computed(() => store.getters.getUser);

		return {
			user,
			tarefasPendentes,
			tarefasConcluidas
		};
	}
};
</script>

<style lang="scss" scoped>
.infos {
	max-width: 1024px;
	margin: 0 auto;
	text-align: center;
	margin-top: 30px;
}
</style>
