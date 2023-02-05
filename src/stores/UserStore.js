import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import users from "@/data/users.json"
export const useUserStore = defineStore("UserStore", {
  
  state: () => {
    return {
      users: users,
      userLogin: useStorage('false')
    }
  },
  actions: {
    login(value) {
      this.userLogin = value
      console.log("llego", this.userLogin)
   }
 }

})
