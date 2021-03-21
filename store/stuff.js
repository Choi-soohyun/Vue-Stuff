export const state = () => ({
  stuffList: [
    {
      'id':1,
      'title':'바나나',
      'place':'냉장고',
      'buyDate':'2021-03-20',
      'limitDate':'2021-03-27',
      'leftover':10
    },
    {
      'id':2,
      'title':'요구르트',
      'place':'냉장고',
      'buyDate':'2021-03-20',
      'limitDate':'2021-03-27',
      'leftover':8
    },
    {
      'id':3,
      'title':'콜라',
      'place':'냉장고',
      'buyDate':'2021-03-20',
      'limitDate':'2021-03-27',
      'leftover':5
    },
    {
      'id':4,
      'title':'사이다',
      'place':'냉장고',
      'buyDate':'2021-03-20',
      'limitDate':'2021-03-27',
      'leftover':0
    },
  ]
});

export const mutations = {
  register(state, payload) {
    state.stuffList.push(payload);
  }, 
  eat(state, payload) {
    const index = state.stuffList.findIndex(v => v.id === payload.id);

    if(index !== -1) { 
      
      console.log("Eat1");
      const leftover = state.stuffList[index].leftover;
      if(leftover > 0) {
        
      console.log("Eat2");
        state.stuffList[index].leftover -= 1;
      }
    }
  },
  del(state, payload) {
    const index = state.stuffList.findIndex(v => v.id === payload.id);
    if(index !== -1) {
      state.stuffList.splice(index, 1);
    }
  }
}

export const actions = {
  actionRegister({ commit }, payload) {
    commit('register', payload);
  },
  actionEat({ commit }, payload) {
    commit('eat', payload);
  },
  actionDel({ commit }, payload) {
    commit('del', payload);
  },
}