<template>
  <div id="app">
    <v-app>
      <toolbar/>
      <main>
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  name: 'app',
  components: {
    Toolbar
  }
}
</script>

<style>

</style>
