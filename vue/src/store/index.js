import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      userImageUrl:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      userName:''
    },
    learningConfig:{
      mode:"",  
    },
  },
  getters:{
    userImageUrl(state){
      if(state.user.userImageUrl==null)
        return 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
      else
        return state.user.userImageUrl;
    }
  },
  mutations: {
    setUser(state,user){
      state.user.userImageUrl = user.avator;
      state.user.userName = user.userName;
    },
    setLearningMode(state,mode){
      state.learningConfig.mode = mode;
    }
  },
  actions: {
  },
  modules: {
  }
})
