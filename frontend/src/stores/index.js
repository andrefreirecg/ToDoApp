import { createStore } from 'vuex'
import authModule from './auth.js';
import taskModule from './tasks.js'
const store = createStore({
	state() {
	
	},
	mutations: {
	
	},
	actions: {
		
	},
	getters: {
		
	},
	modules: {
		auth: authModule,
		tasks: taskModule
	},
})

export default store
