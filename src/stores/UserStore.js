import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import users from "../data/users.json"
export const useUserStore = defineStore("UserStore", {
  
  state: () => {
    return {
      users: users,
      userLogin: useStorage('login', {}),
      log : false
    }
  },
  getters: {
    hasLogin: (state) => JSON.stringify(state.userLogin) !== "{}"
  },
  actions: {
    login(user) {
      this.userLogin = user      
   }
 }

})
