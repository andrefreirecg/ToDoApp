<template>
  <AppNavigation />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import AppNavigation from './components/Header/AppNavigation'
export default {
  name: 'App',
  components: {
    RouterView,
    AppNavigation
  }
}
</script>

<style lang="scss">
	@font-face {
		font-family: 'Space';
		src: url('/public/fonts/SpaceGrotesk.ttf') format('truetype');
	}
    @import './assets/scss/global';
</style>
