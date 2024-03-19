import { createStore } from 'vuex'
import authModule from './auth.js';
import taskModule from './tasks.js'
import responseModule from './response.js'
const store = createStore({
	state() {
		return{
		}
	},
	mutations: {
		
	},
	actions: {
		
	},
	getters: {
		
	},
	modules: {
		auth: authModule,
		tasks: taskModule,
		response: responseModule
	},
})

export default store
