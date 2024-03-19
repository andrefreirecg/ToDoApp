<template>
    <fwb-button color="alternative" @click="showModal">
        <font-awesome-icon :icon="['fas', 'file-circle-plus']" />
        Adicionar Tarefa
    </fwb-button>
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                Nova tarefa
            </div>
        </template>
        <template #body>
            <form @submit.prevent="addTarefaGeneral" class="flex flex-col justify-end gap-3">
                <div class="form-group">
                    <label for="titulo" class="hidden">Título</label>
                    <input type="text" id="titulo" class="form-control w-full" placeholder="Título" required>
                </div>
                <div>
                    <fwb-select v-model="selected" :options="urgency" validation-status="success" required placeholder="Prioridade" underline />
                </div>
                <button type="submit" class="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn btn-primary btn-block">Adicionar</button>
            </form>
        </template>
        <generalResponse v-if="showResponse" />
    </fwb-modal>
</template>

<script>
import { FwbButton, FwbModal, FwbSelect } from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import generalResponse from '../Utils/Response.vue'
import { useStore } from 'vuex'
export default {
    name: 'AddTarefa',
    data() {
        const store = useStore()
        return {
            isShowModal: false,
            selected: '1',
            showResponse: false,
            urgency: store.getters.getUrgencys
        }
    },
    methods: {
        showModal() {
            this.isShowModal = true;
        },
        closeModal() {
            this.isShowModal = false;
        },
        addTarefaGeneral(data) {
            const jsonBody = {
                "title": data.target[0].value,
                "userId": this.$store.getters.getUser.id.toString(),
                "urgency": parseInt(this.selected)
            }
            this.$store.dispatch('addTarefa', jsonBody);
            this.showResponse = true;
            this.closeModal();
        }
    },
    components: {
        FwbButton,
        FwbModal,
        FontAwesomeIcon,
        FwbSelect,
        generalResponse
    }
}
</script>

<style lang="scss" scoped></style>
