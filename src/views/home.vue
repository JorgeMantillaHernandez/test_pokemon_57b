<template>
  <v-container class="text-center" fluid="">
    <v-row>
      <v-col
        cols="12"
        md="10"
        lg="9"
        class="mt-10 mx-auto"
        v-if="pokemons.length > 1"
      >
        <CardPokemon
          v-for="pokemon of pokemons"
          :pokemon="pokemon"
          :key="pokemon.id"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" md="6" class="mx-auto">
        <v-pagination
          v-model="page"
          :length="30"
          color="black"
          @click="goToPage()"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Components
import { getPokemon } from "@/services/pokemon.js";
import CardPokemon from "@/components/common/CardPokemon.vue";

export default {
  name: "home-view",
  data() {
    return {
      pokemons: [],
      page: 1,
    };
  },
  components: { CardPokemon },
  async created() {
    for (let i = 1; i <= 20; i++) {
      await this.getPokemon(i);
    }
  },
  methods: {
    async getPokemon(pokemonId) {
      await getPokemon(pokemonId).then((result) => {
        this.pokemons.push(result);
      });
    },

    async goToPage() {
      const end = this.page * 20;
      const start = end - 19;
      this.pokemons = [];
      for (let i = start; i <= end; i++) {
        await this.getPokemon(i);
      }
    },
  },
};
</script>
<style></style>
