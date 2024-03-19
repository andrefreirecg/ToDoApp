
import axiosInstance from '@/services/http.js';

const state = {
	tasks:  [
    ],
    urgencys: [
        { value: '1', name: 'Trivial', color: 'blue'},
        { value: '2', name: 'Moderada', color: 'yellow'},
        { value: '3', name: 'Prioritária', color: 'orange'},
        { value: '4', name: 'Crítica', color: 'red' }
    ],
    filter: null
};

const mutations = {
    addTarefa: (state, payload) => state.tasks.tasks.unshift(payload.task),
    sincronizeTarefas: (state, payload) => state.tasks = payload,
    removeTarefa: (state, id) => state.tasks = state.tasks.tasks.filter(task => task.id !== id),
    updateTarefa: (state, payload) => {
        const index = state.tasks.findIndex(task => task.id === payload.id);
        if(index !== -1) {
            state.tasks.splice(index, 1, payload);
        }
    },
    doneTaskAtt: (state, payload) => {
        const index = state.tasks.tasks.findIndex(task => task.id === payload.id);
        if(index !== -1) {
            state.tasks.splice(index, 1, payload);
        }
    },
    setFilter: (state, filter) => state.filter = filter,
    clearFilter: (state) => state.filter = null,
    ordenarUp: (state) => {
        state.tasks.tasks.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });
    },
    ordenarDown: (state) => {
        state.tasks.tasks.sort((a, b) => {
            if (a.title < b.title) return 1;
            if (a.title > b.title) return -1;
            return 0;
        });
    },
	ordenarUpData: (state) => {
		state.tasks.tasks.sort((a, b) => {
			if (a.createdAt < b.createdAt) return -1;
			if (a.createdAt > b.createdAt) return 1;
			return 0;
		});
	},
	ordenarDownData: (state) => {
		state.tasks.tasks.sort((a, b) => {
			if (a.createdAt < b.createdAt) return 1;
			if (a.createdAt > b.createdAt) return -1;
			return 0;
		});
	},
	ordenarUpUrgency: (state) => {
		state.tasks.tasks.sort((a, b) => {
			if (a.urgency < b.urgency) return -1;
			if (a.urgency > b.urgency) return 1;
			return 0;
		});
	},
	ordenarDownUrgency: (state) => {
		state.tasks.tasks.sort((a, b) => {
			if (a.urgency < b.urgency) return 1;
			if (a.urgency > b.urgency) return -1;
			return 0;
		});
	}
	
};

const actions = {
    async addTarefa({ commit }, payload) {
        const response = await axiosInstance.post('/create-task', payload);
        commit('addTarefa', response.data);
        return response;
    },
    async sincronizeTarefas({ commit }, userId) {
        const response = await axiosInstance.get('/tasks/'+userId);
        commit('sincronizeTarefas', response.data);
        commit('ordenarUp');
        return response;
    },
    async removeTarefa({ commit, dispatch }, { id, userId }) {
        const deleted = await axiosInstance.delete('/delete-task/'+id);
        commit('removeTarefa', id);
        await dispatch('sincronizeTarefas', userId);
        return deleted;
    },
    async updateTarefa({ commit }, payload) {
        const response = await axiosInstance.put('/update-task/'+payload.id, payload);
        commit('updateTarefa', response.data);
        return response;
    },
    async doneTask({ commit }, payload) {
        const response = await axiosInstance.post('/done-task/'+payload.id, payload);
        commit('doneTaskAtt', response.data);
        return response;
    },
    setFilter({ commit }, filter) {
        commit('setFilter', filter);
    },
    clearFilter({ commit }) {
        commit('clearFilter');
    },
    ordenarUp({ commit }) {
        commit('ordenarUp');
    },
    ordenarDown({ commit }) {
        commit('ordenarDown');
    },
	ordenarUpData({ commit }) {
		commit('ordenarUpData');
	},
	ordenarDownData({ commit }) {
		commit('ordenarDownData');
	},
	ordenarUpUrgency({ commit }) {
		commit('ordenarUpUrgency');
	},
	ordenarDownUrgency({ commit }) {
		commit('ordenarDownUrgency');
	}
   
};

const getters = {
    getTasks: (state) => state.tasks,
    getTaskById: (state) => (id) => {
        return state.tasks.find(task => task.id === id);
    },
    getUrgencys: (state) => state.urgencys,
    filteredTasks: (state) => {
        if(state.filter) {
            return state.tasks.filter(task => task.urgency === state.filter);
        }
        return state.tasks;
    }
};


export default {
	state,
	mutations,
	actions,
	getters
};
