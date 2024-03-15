<template>
	<FwbNavbar v-if="isLoggedIn">
		<template #default="{ isShowMenu }">
			<Logo />
			<FwbNavbarCollapse :is-show-menu="isShowMenu">
				<router-link to="/tarefas"
					class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100">Tarefas</router-link>
				<FwbDropdown :text="user.name || 'Minha Conta'">
					<FwbListGroup>
						<FwbListGroupItem>
							<router-link to="/minha-conta"
								class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100">Minha conta</router-link>
						</FwbListGroupItem>
						<FwbListGroupItem>
							<a href="#" class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100"
								@click="logout">Sair</a>
						</FwbListGroupItem>
					</FwbListGroup>
				</FwbDropdown>
			</FwbNavbarCollapse>
		</template>
	</FwbNavbar>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useStore, mapGetters } from 'vuex';
import Logo from './Logo'
import { computed } from 'vue';
import {
	FwbNavbar,
	FwbNavbarCollapse,
	FwbDropdown,
	FwbListGroup,
	FwbListGroupItem
} from 'flowbite-vue'

export default {
	name: 'AppNavigation',
	components: {
		FwbNavbar,
		FwbNavbarCollapse,
		FwbDropdown,
		FwbListGroup,
		FwbListGroupItem,
		RouterLink,
		Logo
	},
	computed: {
		...mapGetters(['isLoggedIn', 'getUser', 'getToken'])
	},
	setup() {
		const store = useStore();

		const logout = () => store.dispatch('logout');

		return {
			user: computed(() => store.getters.getUser),
			logout
		};
	}
}
</script>

<style lang="scss">
</style>
