<template>
  <v-app-bar color="white" elevation="0" class="pb-3">
    <router-link to="/home" class="mx-sm-auto">
      <img class="logo" src="/src/assets/images/logo.png" />
    </router-link>
    <router-link to="/mypokemons">
      <img
        class="mypokemons-icon mt-n3"
        src="/src/assets/images/pokeball.png"
        title="Yor Pokemons!"
      />
    </router-link>

    <v-menu>
      <template v-slot:activator="{ props }">
        <img class="user-icon" src="@/assets/images/user.png" v-bind="props" />
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title class="text-center">
            <p>Hi {{ userLogin.name }}</p>
            <hr class="mb-4" />
          </v-list-item-title>
          <v-list-item-title class="text-center">
            <v-btn variant="text" color="red" @click="logout"> Logout </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "NavBar",
  props: {
    pokemon: {
      type: Object,
    },
  },
  computed: {
    ...mapState(useUserStore, {
      userLogin: "userLogin",
    }),
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),

    logout() {
      this.login({});
      this.$router.push("/");
    },
  },
};
</script>

<style>
.logo {
  width: auto;
  height: 65px;
  margin-top: 15px;
}

.user-icon {
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: absolute;
  right: 20px;
}
.user-icon:hover {
  width: 63px;
  height: 63px;
}

.mypokemons-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  right: 95px;
}
.mypokemons-icon:hover {
  width: 36px;
  height: 36px;
}
</style>
