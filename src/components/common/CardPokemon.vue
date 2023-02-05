<template>
  <v-card
    width="210"
    height="280"
    class="d-inline-block mx-5 my-5"
    rounded="xl"
    v-if="pokemon"
  >
    <v-btn
      variant="text"
      class="mt-5 btn-add-favorite"
      title="Catch this Pokemon!"
      @click="toggleCatchPokemon(pokemon.id)"
    >
      <img class="pokeball-ico" src="@/assets/images/pokeball.png" />
    </v-btn>
    <div class="pokemon-avatar mx-auto">
      <img
        class="mx-auto mt-5"
        :src="pokemon.sprites.other.dream_world.front_default"
      />
    </div>
    <v-card-text class="text-center">
      <p class="mt-5 mb-0">#{{ pokemon.id }}</p>
      <p class="text-h6">
        {{ pokemon.name }}
      </p>
      <div class="d-flex justify-center">
        <v-btn
          color="primary"
          size="small"
          class="mt-5"
          rounded="xl"
          :to="`pokemon/${pokemon.id}`"
        >
          Check
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import { usePokemonStore } from "@/stores/PokemonStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "CardPokemon",
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
    ...mapActions(usePokemonStore, ["catch"]),

    toggleCatchPokemon(idPokemon) {
      this.catch(this.userLogin.id, idPokemon);
    },
  },
};
</script>

<style scoped>
.pokemon-avatar {
  width: 120px;
  height: 120px;
}

.pokemon-avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pokemon-avatar img:hover {
  width: 95% !important;
}
.pokeball-ico {
  width: 20px;
  height: 20px;
}

.btn-add-favorite {
  position: absolute;
  right: -10px;
  top: -15px;
}

.btn-add-favorite img:hover {
  width: 22px;
  height: 22px;
}
</style>
