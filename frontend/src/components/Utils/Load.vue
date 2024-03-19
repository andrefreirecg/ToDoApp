<template>
	<div class="loading-indicator">
		<fwb-toast v-if="isLoading" :message="responseMessage">
			<template #default>
				Loading...
			</template>
		</fwb-toast>

		<div v-if="isLoading" class="spinner">
			<div class="bounce1"></div>
			<div class="bounce2"></div>
			<div class="bounce3"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FwbToast } from 'flowbite-vue';
import {ref} from 'vue';
export default {
	name: 'LoadingIndicator',
	setup() {
		const isLoading = ref(false);
		let responseMessage = ref('');
		const updateResponseMessage = (message) => {
			isLoading.value = true;
			responseMessage.value = message;
		};

		return {
			isLoading,
			responseMessage: ref(''),
			updateResponseMessage,
			...mapGetters(['setResponseMessage']), 
		};
	},
	computed: {
		...mapGetters(['setResponseMessage']),
	},
	components: {
		FwbToast,
	},
};
</script>

<style scoped>
.loading-indicator {
	/* Customize loading indicator container styles (optional) */
	display: flex;
	justify-content: center;
	align-items: center;
}

.spinner {
	/* Styles for your preferred spinner implementation */
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 4px solid #ddd;
	border-color: #ddd transparent transparent #ddd;
	animation: bounce 1.2s infinite ease-in-out;
}

@keyframes bounce {

	0%,
	100% {
		transform: scale(0.7);
	}

	50% {
		transform: scale(1);
	}
}

/* Customize toast appearance using Flowbite styles (optional) */
.fwb-toast {
	/* Example: adjust background color */
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
}
</style>
