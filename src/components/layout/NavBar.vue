<template>
  <v-app-bar color="white" elevation="0" class="pb-3">
    <v-img src="../src/assets/images/logo.png" />
    <img class="mypokemons-icon mt-2" src="/src/assets/images/pokeball.png" />

    <v-menu>
      <template v-slot:activator="{ props }">
        <img class="user-icon" src="@/assets/images/user.png" v-bind="props" />
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn variant="text" @click="logout"> Logout </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import { mapActions } from "pinia";
export default {
  name: "NavBar",
  props: {
    pokemon: {
      type: Object,
    },
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
  width: 40px;
  height: 40px;
}
</style>
