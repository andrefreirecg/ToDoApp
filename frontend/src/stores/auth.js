import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useAuthStore = defineStore('auth', () => {
	const token = ref(localStorage.getItem('token') || '')
	const user = ref(JSON.parse(localStorage.getItem('user')) || {})
	function setToken(newToken) {
		localStorage.setItem('token', newToken)
		token.value = newToken
	}
	function setUser(newUser) {
		localStorage.setItem('user', JSON.stringify(newUser))
		user.value = newUser
	}
	function logout() {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		token.value = ''
		user.value = {}
	}
	function login(newToken, newUser) {
		setToken(newToken)
		setUser(newUser)
	}
	return {
		token,
		user,
		setToken,
		setUser,
		logout,
		login
	}
})


