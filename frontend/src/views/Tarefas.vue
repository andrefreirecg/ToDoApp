<template>
	<div id="tarefas" class="container">
		<h1>Tarefas</h1>
		<div class="flex justify-center my-2 gap-2 p-2">
			<AddTarefa />
			<FiltrarTarefa />
		</div>
		<div class="allTasks">
			<card-component v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa" />
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import CardComponent from '@/components/Tasks/CardComponent.vue';
import { useStore } from 'vuex';
import AddTarefa from '@/components/Tasks/AddTarefa.vue';
import FiltrarTarefa from '@/components/Tasks/FilterTarefa.vue';
export default {
	name: 'TarefasView',
	components: {
		CardComponent,
		FiltrarTarefa,
		AddTarefa
	},
	setup() {
		const store = useStore();
		const userId = store.state.auth.user.id;
		store.dispatch('sincronizeTarefas', userId);

		const tarefas = ref(store.state.tasks.tasks);

		store.watch(
			() => store.state.tasks.tasks,
			(newState) => {
				tarefas.value = newState.tasks;
			}
		);

		return { tarefas };
	},
	mounted() {
		document.title = 'Tarefas';
	},
}
</script>

<style lang="scss" scoped>
.allTasks{
	max-width: 1024px;
	margin: 0 auto;
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}
</style>
