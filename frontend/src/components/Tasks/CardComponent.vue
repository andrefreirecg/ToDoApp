<template>
	<div @click.right.prevent="toggleClick"
		class="cardComponent max-w-sm gap-2 p-6 pb-6 bg-white border relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-start"
		:style="{ borderColor: urgencyColor }">
		<div class="flex flex-col ">
			<div>
				<doneTasks :tarefa="tarefa" class="card-icon" />
			</div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{{ tarefa.titulo ?? tarefa.title }}
			</h5>
			<p v-if="isClicked">Data de criação: <span>{{ formatDate(tarefa.createdAt) }}</span></p>
		</div>
		<div v-if="isClicked">
			<div class="flex justify-between flex-col items-center">
				<button
					class="text-red-500 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					@click="removeTarefa(tarefa.id)">
					<font-awesome-icon class="card-icon" :icon="['fas', 'square-xmark']" />
				</button>

				<EditTarefa :tarefa="tarefa" class="card-icon" />
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EditTarefa from "./EditTarefa.vue";
import doneTasks from "./doneTasks.vue";
import { useStore } from "vuex";
import dayjs from 'dayjs';

export default {
	name: 'CardComponent',
	data() {
		return {
			isHover: false,
			isClicked: false
		}
	},
	props: {
		tarefa: {
			type: Object,
			required: true
		}
	},
	components: {
		FontAwesomeIcon,
		EditTarefa,
		
		doneTasks
	},
	methods: {
		removeTarefa(id) {
			let userId = this.$store.state.auth.user.id;
			this.$store.dispatch('removeTarefa', { id: id, userId: userId });
		},
		toggleClick() {
			this.isClicked = !this.isClicked;
		},
		formatDate(date) {
            return dayjs(date).format('DD/MM/YY HH:mm');
        }
	},
	computed: {
		urgencyColor() {
			const store = useStore();
			const urgency = store.getters.getUrgencys;
			let color = '';
			urgency.forEach(urgency => {
				if (urgency.value == this.tarefa.urgency) {
					color = urgency.color;
				}
			});
			return color;
		}
	}
};
</script>

<style scoped>
.cardComponent {
	border-left: 15px solid;
	min-width: 200px;
	min-height: 100px;

	>button {
		position: absolute;
		right: 5%;
		top: 5%;
	}

}
</style>
