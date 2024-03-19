<template>
    <fwb-button color="alternative" class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="showModal">
        <font-awesome-icon :icon="['fas', 'edit']" />
    </fwb-button>
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                Editar tarefa
            </div>
        </template>
        <template #body>
            <form @submit.prevent="updateTarefa" class="flex flex-col justify-end gap-3">
                <div class="form-group">
                    <label for="titulo" class="hidden">Título</label>
                    <input type="text" id="titulo" class="form-control w-full" v-model="editedTitle" required>
                </div>
                <div>
                    <fwb-select v-model="editedUrgency" :options="urgency" validation-status="success"
                        label="Prioridade" placeholder="Prioridade" underline />
                </div>
                <button type="submit" 
                    class="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn btn-primary btn-block" disabled>Salvar
                    Alterações</button>
            </form>
        </template>
    </fwb-modal>
</template>

<script>
import { FwbButton, FwbModal, FwbSelect } from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useStore } from 'vuex'
export default {
    name: 'EditTarefa',
    props: {
        tarefa: Object 
    },
    data() {
        const store = useStore()
        return {
            isShowModal: false,
            editedTitle: '',
            editedUrgency: '',
            showResponse: false,
            urgency: store.getters.getUrgencys
        }
    },
    methods: {
        showModal() {
            if (this.tarefa && this.tarefa.title) {
                this.isShowModal = true;
                this.editedTitle = this.tarefa.title;
                this.editedUrgency = this.tarefa.urgency;
            } else {
                console.error('Error: Task data is incomplete or undefined.');
            }
        },
        closeModal() {
            this.isShowModal = false;
        },
        updateTarefa() {
            const jsonBody = {
                "title": this.editedTitle,
                "urgency": parseInt(this.editedUrgency)
            }
            this.$store.dispatch('updateTarefa', {id: this.task.id, data: jsonBody});
            this.isShowModal = false;
        }
      
    },
    components: {
        FwbButton,
        FwbModal,
        FontAwesomeIcon,
        FwbSelect,
    }
}
</script>

<style lang="scss" scoped></style>
