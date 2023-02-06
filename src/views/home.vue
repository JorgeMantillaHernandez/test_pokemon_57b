<template>
  <v-container class="text-center" fluid="">
    <v-row>
      <v-col cols="10" md="8" class="mx-auto mt-8">
        <v-text-field
          v-model="inputSearch"
          density="compact"
          variant="solo"
          label="Search Pokemons"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @keyup="searchPokemons()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="10" lg="9" class="mt-2 mx-auto" v-if="pokemons">
        <CardPokemon
          v-for="pokemon of pokemons"
          :pokemon="pokemon"
          :key="pokemon.id"
        />
      </v-col>
    </v-row>
    <v-row v-if="inputSearch.length === 0">
      <v-col cols="12" sm="10" md="8" lg="6" class="mx-auto">
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
import { usePokemonStore } from "@/stores/PokemonStore";
import { mapState, mapActions } from "pinia";
import { getPokemon, getAllPokemon } from "@/services/pokemon.js";
import CardPokemon from "@/components/common/CardPokemon.vue";

export default {
  name: "home-view",
  data() {
    return {
      pokemons: [],
      page: 1,
      inputSearch: "",
    };
  },
  components: { CardPokemon },
  computed: {
    ...mapState(usePokemonStore, {
      allPokemons: "allPokemons",
    }),
  },
  async created() {
    for (let i = 1; i <= 20; i++) {
      await this.getPokemon(i);
    }
    if (this.allPokemons.length === 0) {
      await getAllPokemon(600).then((result) => {
        this.setAllPokemons(result.results);
      });
    }
  },
  methods: {
    ...mapActions(usePokemonStore, ["setAllPokemons"]),
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
    async searchPokemons() {
      if (this.inputSearch.length > 3) {
        const pokemonsFiltered = this.allPokemons.filter((pokemon) => {
          this.pokemons = [];
          return pokemon.name.includes(this.inputSearch);
        });
        pokemonsFiltered.forEach(async (pokemon) => {
          this.pokemons = [];
          await this.getPokemon(pokemon.name);
        });
      } else if (this.inputSearch.length === 0) {
        this.pokemons = [];
        this.goToPage();
      }
    },
  },
};
</script>
<style></style>
