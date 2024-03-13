<template>
	<div id="login" class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="card">
					<div class="card-header">
						<h3 class="text-center">Login</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="AuthLogin">
							<div class="form-group">
								<label for="email">E-mail</label>
								<input type="email" id="email" class="form-control" v-model="data.email.value">
							</div>
							<div class="form-group">
								<label for="password">Senha</label>
								<input type="password" id="password" class="form-control" v-model="data.password.value">
							</div>
							<button type="submit" class="btn btn-primary btn-block">Entrar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import httpService from '@/services/http.js';
import {useAuthStore} from '@/stores/auth.js';
import router from '@/routes';
const auth = useAuthStore();
const data = {
	email: ref('andrefreirecg@gmail.com'),
	password: ref('exemplo')
}
function AuthLogin() {
	httpService.post('auth', {
		email: data.email.value,
		password: data.password.value
	})
	.then(response => {
		auth.setToken(response.data.token);
		auth.setUser(response.data.user);
		router.push({path: '/'});
	})
	.catch(error => {
		console.error('Error:', error);
	});
}
onMounted(() => {
	document.title = 'Acesso - ToDo App';
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/Login';
</style>
