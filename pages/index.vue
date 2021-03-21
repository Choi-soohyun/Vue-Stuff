<template>
  <section class="contents">
    <stuff-list :stuffs="stuffList" :onEat="eat"></stuff-list>
  </section>
</template>

<script>
import StuffList from '~/components/StuffList.vue';

export default {
  components: {
    StuffList
  },
  computed: {
    stuffList() {
      return this.$store.state.stuff.stuffList;
    },
  },
  methods: {
    eat(id) {
      this.$store.dispatch('stuff/actionEat', { id });
    }
  }
}
</script>

<style>
</style>