<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import { mapState } from "pinia";
import NavBar from "@/components/layout/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },

  computed: {
    ...mapState(useUserStore, {
      users: "users",
      userLogin: "userLogin",
    }),
  },
  created() {
    if (this.userLogin === "false") {
      this.$router.push("/");
    }
    if (this.userLogin === "true" && this.$route.fullPath === "/") {
      this.$router.push("/home");
    }
  },
};
</script>
