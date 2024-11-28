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
    <Layout>
        <router-view></router-view>
    </Layout>
</template>

<style scoped>

</style>
