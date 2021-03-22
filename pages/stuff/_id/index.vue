<template>
  <section v-if="getStuff">
    <stuff-form :editStuff="getStuff" :stuffEvent="editorStuff"></stuff-form>
  </section>
  <section v-else>
    없다.
  </section>
</template>

<script>
import StuffForm from '~/components/StuffForm';

export default {
  layout: 'stuff',
  components: {
    StuffForm,
  },
  computed: {
    getStuff() {
      return this.$store.state.stuff.stuffList.find(v => v.id === parseInt(this.$route.params.id, 10));
    },
  },
  methods: {
    editorStuff(data) {
      this.$store.dispatch('stuff/actionEdit', data);
    }
  }
}
</script>

<style>

</style>