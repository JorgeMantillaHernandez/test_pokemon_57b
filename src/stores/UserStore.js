import { defineStore } from "pinia";
import users from "@/data/users.json"
export const useUserStore = defineStore("UserStore", {
  
  state: () => {
    return {
      users: users
    }
  }

})
