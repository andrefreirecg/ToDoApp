<template>
	<fwb-button color="alternative" @click="showModal">
		<font-awesome-icon :icon="['fas', 'filter']" />
		Filtrar
	</fwb-button>
	<fwb-modal v-if="isShowModal" @close="closeModal">
		<template #header>
			<div class="flex items-center text-lg">
				Filtrar
			</div>
		</template>
		<template #body>
			<div class="filtrar">
				<div class="ordem">
					<div class="flex gap-3">
						Alfabética:
						<button @click.prevent="ordenarUp">
							<font-awesome-icon icon="arrow-down-a-z" />
						</button>
						<button @click.prevent="ordenarDown">
							<font-awesome-icon icon="arrow-up-a-z" />
						</button>
					</div>
					<div class="flex gap-3">
						Data:
						<button @click.prevent="ordenarUpData">
							<font-awesome-icon icon="arrow-down" />
						</button>
						<button @click.prevent="ordenarDownData">
							<font-awesome-icon icon="arrow-up" />
						</button>
					</div>
					<div class="flex gap-3">
						Urgência:
						<button @click.prevent="ordenarUpUrgency">
							<font-awesome-icon icon="arrow-down" />
						</button>
						<button @click.prevent="ordenarDownUrgency">
							<font-awesome-icon icon="arrow-up" />
						</button>
					</div>
				</div>
			</div>
		</template>
	</fwb-modal>
</template>

<script>
import { FwbButton, FwbModal } from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
	name: 'FiltrarTarefa',
	data() {
		return {
			isShowModal: false,

		}
	},
	methods: {
		showModal() {
			this.isShowModal = true;
		},
		closeModal() {
			this.isShowModal = false;
		},
		ordenarUp() {
			this.$store.dispatch('ordenarUp');
		},
		ordenarDown() {
			this.$store.dispatch('ordenarDown');
		},
		ordenarUpData() {
			this.$store.dispatch('ordenarUpData');
		},
		ordenarDownData() {
			this.$store.dispatch('ordenarDownData');
		},
		ordenarUpUrgency() {
			this.$store.dispatch('ordenarUpUrgency');
		},
		ordenarDownUrgency() {
			this.$store.dispatch('ordenarDownUrgency');
		}
	},
	components: {
		FwbButton,
		FwbModal,
		FontAwesomeIcon,
	}
}
</script>

<style lang="scss" scoped></style>
