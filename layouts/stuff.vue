<template>
  <section>
    <header>
      <div class="logo">
        <nuxt-link to="/">Stuff</nuxt-link>
      </div>
      <div class="more">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      
      <navigator></navigator>
    </header>
    <nuxt />
  </section>
</template>

<script>
  import Navigator from '~/components/Navigator.vue';

  export default {
    components: {
      Navigator
    },
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>

<style scoped>
</style>