<template>
  <v-card
    width="210"
    height="280"
    class="d-inline-block mx-5 my-5"
    rounded="xl"
    v-if="pokemon"
  >
    <CatchPokemon :idPokemon="pokemon.id" :typeButton="'pokeball'" />
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
import CatchPokemon from "@/components/common/CatchPokemon.vue";
export default {
  name: "CardPokemon",
  props: {
    pokemon: {
      type: Object,
    },
  },
  components: { CatchPokemon },
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
</style>
