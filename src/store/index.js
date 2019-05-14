import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 全局数据
const store = new Vuex.Store({
    state:{
      isCollapse:false, //菜单栏的开关状态
      openWidth:"width:200px;"
    },
    mutations:{
      changeWidth(state){
        state.isCollapse = !state.isCollapse
        if (state.isCollapse) {
          state.openWidth = "width:55px;";
      } else {
          state.openWidth = "width:200px;";
      }
      }
    },
    actions:{
       
    },
    getters:{
        
    },
})

export default store;