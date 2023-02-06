<template>
  <v-container class="text-center" fluid="">
    <v-row>
      <v-col cols="12" md="10" lg="9" class="mt-10 mx-auto">
        <CardPokemon
          v-for="pokemon of pokemons"
          :pokemon="pokemon"
          :key="pokemon.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import { usePokemonStore } from "@/stores/PokemonStore";
import { mapState } from "pinia";
// Components
import { getPokemon } from "@/services/pokemon.js";
import CardPokemon from "@/components/common/CardPokemon.vue";

export default {
  name: "mypokemons-view",
  data() {
    return {
      page: 1,
      pokemons: [],
    };
  },
  components: { CardPokemon },
  computed: {
    ...mapState(useUserStore, {
      userLogin: "userLogin",
    }),

    ...mapState(usePokemonStore, {
      userPokemons: "userPokemons",
    }),
  },
  watch: {
    userPokemons() {
      this.getMyPokemons();
    },
  },
  mounted() {
    this.getMyPokemons();
  },
  methods: {
    async getPokemon(pokemonId) {
      await getPokemon(pokemonId).then((result) => {
        this.pokemons.push(result);
      });
    },

    getMyPokemons() {
      this.pokemons = [];
      const pokemonsListByUser = this.userPokemons.filter(
        (pokemon) => pokemon.userId === this.userLogin.id
      );
      pokemonsListByUser.forEach((pokemon) => {
        this.getPokemon(pokemon.pokemonId);
      });
    },
  },
};
</script>
<style></style>
