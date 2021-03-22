<template>
  <section>
    <header>
      <div class="logo">
        <nuxt-link to="/">Stuff</nuxt-link>
      </div>
      <div class="more" @click="more">
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
    },
    methods: {
      more() {
        const el = document.querySelector('.nav')

        if(el.classList.contains('active')) {
          el.classList.remove('active');
        } else {
          el.classList.add('active');
        }
      }
    }
  }
</script>

<style scoped>
</style>