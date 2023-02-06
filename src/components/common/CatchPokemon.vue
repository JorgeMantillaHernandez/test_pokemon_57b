<template>
  <v-btn
    v-if="typeButton === 'pokeball'"
    variant="text"
    class="mt-5 btn-add-favorite"
    :class="catched ? '' : 'greyPokabell'"
    :title="catched ? 'Release this Pokemon' : 'Catch this Pokemon!'"
    @click="toggleCatchPokemon(idPokemon)"
  >
    <img class="pokeball-ico" src="../../assets/images/pokeball.png" />
  </v-btn>
  <v-btn
    v-if="typeButton === 'detail'"
    :color="catched ? 'grey' : 'primary'"
    class="mt-8"
    @click="toggleCatchPokemon(idPokemon)"
  >
    <img
      class="pokeball-ico mr-3"
      :class="catched ? '' : 'greyPokabell'"
      src="../../assets/images/pokeball.png"
    />
    {{ catched ? "RELEASE this pokemon!" : "CATCH this Pokemon!" }}
  </v-btn>
</template>

<script>
import { useUserStore } from "../../stores/UserStore";
import { usePokemonStore } from "../../stores/PokemonStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "CatchPokemon",
  props: {
    idPokemon: {
      type: Number,
    },
    typeButton: {
      type: String,
    },
  },
  computed: {
    ...mapState(useUserStore, {
      userLogin: "userLogin",
    }),
    ...mapState(usePokemonStore, {
      userPokemons: "userPokemons",
    }),
    catched() {
      return !!this.userPokemons.find(
        (pokemon) =>
          pokemon.userId === this.userLogin.id &&
          pokemon.pokemonId === this.idPokemon
      );
    },
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

.greyPokabell {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
</style>
