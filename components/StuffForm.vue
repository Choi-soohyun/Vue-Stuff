<template>
  <section v-if="editStuff">
    {{ editStuff.title }}
  </section>
  <section v-else>
    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
      <v-text-field
        v-model="title"
        label="음식 이름"
        type="text"
      />
      <v-text-field
        v-model="place"
        label="저장소"
        type="text"
      />
      <v-date-picker
        v-model="buyDate"
        label="구매일자"
      />
      <v-date-picker
        v-model="limitDate"
        label="유통기한"
      />
      <v-text-field
        v-model="leftover"
        label="개수"
        type="text"
      />
      <v-btn type="submit" :disabled="!valid">등록</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: '',
      place: '',
      buyDate: new Date(),
      limitDate: new Date(),
      leftover:0,
    }
  },
  props: {
    editStuff: {
      type: Object,
    }
  },
  methods: {
    onSubmitForm() {

    }
  }
}
</script>

<style>

</style>