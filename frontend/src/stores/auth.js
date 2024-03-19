import { jwtDecode } from 'jwt-decode';
import axiosInstance from '@/services/http.js';

const state = {
	token: localStorage.getItem('token') || '',
	user: JSON.parse(localStorage.getItem('user')) || {},
};

const mutations = {
	setToken(state, newToken) {
		localStorage.setItem('token', newToken);
		state.token = newToken;
	},
	setUser(state, newUser) {
		localStorage.setItem('user', JSON.stringify(newUser));
		state.user = newUser;
	},
	logout(state) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		state.token = '';
		state.user = {};
	},
	
};

const actions = {
	async login({ commit }, userData) {
		try {
			const response = await axiosInstance.post('/auth/login', userData);
			if (response.status === 200) {
				const { token, user } = response.data;
				const expirationDate = jwtDecode(token).exp;
				const now = Math.floor(Date.now() / 1000);
				const expiresIn = expirationDate - now;
				commit('setToken', token);
				commit('setUser', user);

				setTimeout(() => {
					commit('logout');
				}, expiresIn * 1000);
				return user;
			}
		} catch (error) {
			commit('setResponseActive', true)
			if(error.response.status === 401){
				console.log('Usuário ou senha inválidos')
				commit('setResponseMessage', 'Usuário ou senha inválidos')
			}else{
				commit('setResponseMessage', 'Erro ao fazer login')
			}
		}
	},
	logout({ commit }) {
		commit('logout');
	},
	async createAccount({ commit }, userData) {
		try {
			const response = await axiosInstance.post('/create-user', userData);
			if (response.status === 201) {
				const user  = response;
				commit('setUser', user);
				const login = await axiosInstance.post('/auth/login', {email: userData.email, password: userData.password});
				const token = login.data.token;
				commit('setToken', token);
				return login;
			}
		} catch (error) {
			console.error('Erro ao criar conta:', error);
			throw error;
		}
	}
};

const getters = {
	isLoggedIn(state) {
		return state.token !== '';
	},
	getToken(state) {
		return state.token;
	},
	getUser(state) {
		return state.user;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
