<template>
	<div id="criar-conta">
			<div
			class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h1 class="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<Logo />
			</h1>
			<form @submit.prevent="AuthCreateAccount" class="flex flex-col">
				<div class="form-group">
					<label for="name" class="hidden">Nome</label>
					<input type="text" id="name" class="form-control w-full" v-model="data.name.value" placeholder="Nome" required>
				</div>
				<div class="form-group">
					<label for="email" class="hidden">E-mail</label>
					<input type="email" id="email" class="form-control w-full" v-model="data.email.value" placeholder="Email" required>
				</div>
				<div class="form-group">
					<label for="password" class="hidden">Senha</label>
					<input type="password" id="password" class="form-control w-full" v-model="data.password.value" placeholder="Senha" required>
				</div>
				<button type="submit"
					class="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn btn-primary btn-block">Criar conta</button>
				<router-link to="/login" class=" flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">Já tenho uma conta</router-link>
			</form>
		</div>
			
			
	</div>
</template>

<script>
import { computed } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from 'vuex';
import Logo from '@/components/Header/Logo.vue';
import store from '@/stores';

export default {
	name: 'CriarConta',
	setup() {
		const store = useStore();
		const user = computed(() => store.getters.getUser);
		const data = {
			name: {
				value: '',
			},
			email: {
				value: '',
			},
			password: {
				value: '',
			},
		};
		return {
			user: user,
			data: data,
		};
	},
	methods: {
		async AuthCreateAccount() {
			try {
				const user = await store.dispatch('createAccount', this.data);
				if (user) {
					this.$router.push({ path: '/' });
				}
			} catch (error) {
				console.error('Erro ao criar conta:', error);
			}
		},
	},
	computed: {
		...mapGetters(['isLoggedIn', 'getUser', 'getToken'])
	},
	components: {
		Logo,
	},
	mounted() {
		document.title = 'Criar conta - ToDo App';
	},

}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/pages/CriarConta';

</style>
