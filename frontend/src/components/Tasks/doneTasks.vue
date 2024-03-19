<template>
    <div 
        @click.prevent="doneTask"
        :class="[doneTaskColor, 'inline-flex items-center gap-2 px-2 py-1 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-red-800', done ? 'bg-green-700' : 'border bg-']">
        <font-awesome-icon :icon="done ? ['fa', 'check-square'] : ['fa', 'square']" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'doneTasks',
    props:{
        tarefa: {
            type: Object
        }
    },
    components: {
        FontAwesomeIcon
    },
    methods: {
        doneTask() {
            this.done = !this.done;
            let id = this.tarefa.id;
            this.$store.dispatch('doneTask', {id: id});
        },
        doneTaskColor() {
            return this.done ? 'text-green-500' : 'text-black';
        }
    },
    data() {
        return {
            done: this.tarefa.done
        }
    }
}
</script>

<style lang="scss" scoped>
/* Estilos opcionais para o componente */
</style>
