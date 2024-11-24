<script>
import Layout from './components/Layout/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {
      activeComp: ''
    }
  }
}
</script>

<template>
  <div id="app">
    <Layout>
      <div>
        <router-view></router-view>
      </div>
    </Layout>
  </div>
</template>

<style scoped>

</style>
