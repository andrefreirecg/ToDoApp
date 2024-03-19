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
	@import url('https://fonts.googleapis.com/css2?family=Noticia+Text:ital,wght@0,400;0,700;1,400;1,700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

    @import '../assets/scss/global.scss';
</style>
