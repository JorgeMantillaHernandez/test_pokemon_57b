<template>
  <v-container class="text-center" fluid="">
    <v-row>
      <v-col cols="12">
        <CardDetailPokemon
          :pokemon="pokemon"
          v-if="pokemon"
          :key="pokemon.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Components
import { getPokemon } from "@/services/pokemon.js";
import CardDetailPokemon from "@/components/common/CardDetailPokemon.vue";
export default {
  name: "pokemon-view",
  components: { CardDetailPokemon },
  data() {
    return {
      pokemon: {},
      key: 0,
    };
  },

  // call the method if the route changes
  watch: {
    "$route.params.id"(pokemonId) {
      this.fetchPokemon(pokemonId);
    },
  },

  created() {
    const pokemonId = this.$route.params.id;
    this.fetchPokemon(pokemonId);
  },
  methods: {
    fetchPokemon(pokemonId) {
      if (pokemonId > 600) {
        this.$router.push("/error");
      } else {
        getPokemon(pokemonId).then((result) => {
          this.pokemon = result;
        });
      }
    },
  },
};
</script>
<style></style>
