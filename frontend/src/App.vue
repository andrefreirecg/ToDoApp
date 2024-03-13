<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/login">
          Login
        </RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<style lang="scss">
    @import './assets/scss/global';
</style>
