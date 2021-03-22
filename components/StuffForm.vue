<template>
  <!-- 
    Q) new / edit 두 링크가 해당 파일을 import한다.
       new, edit 둘 다 어찌하였든 입력 또는 보여지는 항목이 동일해서 
       방법을 생각하다가 다음과 같이 시도해봤다.
  -->
  <section v-if="editStuff">
    <v-form ref="form" v-model="valid" @submit.prevent="stuffEvent(getOneStuff)">
      <v-text-field
        v-model="getOneStuff.title"
        label="음식 이름"
        type="text"
      />
      <v-text-field
        v-model="getOneStuff.place"
        label="저장소"
        type="text"
      />
      <v-text-field
        v-model="getOneStuff.buyDate"
        label="구매일자"
        type="date" 
      />
      <v-text-field
        v-model="getOneStuff.limitDate"
        label="유통기한"
        type="date" 
      />
      <v-text-field
        v-model="getOneStuff.leftover"
        label="개수"
        type="text"
      />
      <v-btn type="submit" :disabled="!valid">등록</v-btn>
    </v-form>
  </section>
  <section v-else>
    <v-form ref="form" v-model="valid" @submit.prevent="stuffEvent(stuffOne)">
      <v-text-field
        v-model="stuffOne.title"
        label="음식 이름"
        type="text"
      />
      <v-text-field
        v-model="stuffOne.place"
        label="저장소"
        type="text"
      />
      <v-text-field
        v-model="stuffOne.buyDate"
        label="구매일자"
        type="date" 
      />
      <v-text-field
        v-model="stuffOne.limitDate"
        label="유통기한"
        type="date" 
      />
      <v-text-field
        v-model="stuffOne.leftover"
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
      stuffOne: {
        title: '',
        place: '',
        buyDate: new Date().toISOString().substr(0, 10),
        limitDate: new Date().toISOString().substr(0, 10),
        leftover: 0,
      },
    }
  },
  props: {
    editStuff: { // edit 페이지에서 부모가 준 값
      type: Object,
    },
    stuffEvent: { // new, edit 페이지에서 부모가 준 이벤트
      type: Function,
    }
  },
  computed: {
    getOneStuff() {
      this.stuffOne.title = this.editStuff.title;
      this.stuffOne.place = this.editStuff.place;
      this.stuffOne.buyDate = this.editStuff.buyDate;
      this.stuffOne.limitDate = this.editStuff.limitDate;
      this.stuffOne.leftover = this.editStuff.leftover;

      return this.stuffOne;
    }
  }
}
</script>

<style>

</style>