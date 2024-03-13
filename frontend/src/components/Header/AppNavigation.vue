<template>
	<fwb-navbar>
		<template #logo>
			<router-link to="/" class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100">
				<img src="/todoapp-logo.svg" alt="Todo app Logo" />
			</router-link>
		</template>
		<template v-if="user" #default="{ isShowMenu }">
			<fwb-navbar-collapse :is-show-menu="isShowMenu">
				<router-link to="/tarefas"
					class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100">Tarefas</router-link>
				<fwb-dropdown :text="user.name || 'Minha Conta'">
					<fwb-list-group>
						<fwb-list-group-item>
							<router-link to="/minha-conta"
								class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100">Minha conta</router-link>
						</fwb-list-group-item>
						<fwb-list-group-item>
							<a href="#" class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100"
								@click="auth.logout()">Sair</a>
						</fwb-list-group-item>
					</fwb-list-group>
				</fwb-dropdown>
			</fwb-navbar-collapse>
		</template>
	</fwb-navbar>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth.js';
const auth = useAuthStore();

import {
	FwbNavbar,
	FwbNavbarCollapse,
	FwbDropdown,
	FwbListGroup,
	FwbListGroupItem
} from 'flowbite-vue'

let user = JSON.parse(localStorage.getItem('user'));

</script>

<style lang="scss" scoped>
@import '@/assets/scss/global';
</style>
