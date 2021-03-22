<template>
  <section>
    <stuff-form :stuffEvent="registerStuff"></stuff-form>
  </section>
</template>

<script>
import StuffForm from '~/components/StuffForm';

export default {
  layout: 'stuff',
  components: {
    StuffForm,
  },
  methods: {
    registerStuff(data) {
      this.$store.dispatch('stuff/actionRegister', data);
    }
  }
}
</script>

<style>

</style>