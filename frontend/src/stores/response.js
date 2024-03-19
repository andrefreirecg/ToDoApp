const state = {
	responseActive: false,
	responseMessage: '',
};

const mutations = {
	setResponseActive(state, value) {
		state.responseActive = value;
		
	},
	setResponseMessage(state, value) {
		state.responseMessage = value;
	},
	
};

const actions = {
	setResponseActive({ commit }, value) {
		commit('setResponseActive', value);
	},
	setResponseMessage({ commit }, value) {
		commit('setResponseMessage', value);
	},
};

const getters = {
	getResponseActive(state) {
		return state.responseActive;
	},
	getResponseMessage(state) {
		return state.responseMessage;
	},
};

export default {
	state,
	mutations,
	actions,
	getters
};
