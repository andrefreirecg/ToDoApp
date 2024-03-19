<template>
	<header id="header">
		<FwbNavbar v-if="isLoggedIn">
			<template #default="{ isShowMenu }">
				<Logo />
				<FwbNavbarCollapse :is-show-menu="isShowMenu" >
					<div class="header-itens">
						
						<router-link to="/tarefas"
							class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100">Tarefas</router-link>
						<FwbDropdown :text="user.name || 'Minha Conta'">
							<FwbListGroup>
								<FwbListGroupItem>
									<button type="button" class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100" disabled>
										Minha conta
									</button>
								</FwbListGroupItem>
								<FwbListGroupItem>
									<a href="#" class="text-gray-700 dark:text-gray-300 md:dark:text-gray-100"
										@click="logout">Sair</a>
								</FwbListGroupItem>
							</FwbListGroup>
						</FwbDropdown>
					</div>
				</FwbNavbarCollapse>
			</template>
		</FwbNavbar>
	</header>
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

<style lang="scss" scoped>
@import '../../../assets/scss/global';
#header {
	@media (min-width: $tablet) {
		max-width: 1024px;
		margin: 0 auto;
	}
	.header-itens{
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@media (min-width: $tablet) {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
