<template>
  <v-card width="100%" height="auto" rounded="xl" v-if="pokemon">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4" class="fill-height">
          <div class="pokemon-avatar mx-auto">
            <img
              v-if="pokemon.sprites"
              class="mx-auto"
              :src="pokemon.sprites.other.dream_world.front_default"
            />
            <p class="text-subtitle-1"># {{ pokemon.id }}</p>
            <h1 class="text-h4 text-uppercase">{{ pokemon.name }}</h1>
            <CatchPokemon :idPokemon="pokemon.id" :typeButton="'detail'" />
          </div>
        </v-col>
        <v-col cols="12" md="7" md-offset="1">
          <v-row>
            <v-col cols="12" md="6" class="text-md-left">
              <div>
                <h2>
                  <v-icon color="red"> mdi-information-outline </v-icon>
                  INFO
                </h2>
                <div class="pl-8 mt-1">
                  <p class="mb-1 text-subtitle-1">
                    <b>Weight</b> {{ pokemon.weight }}
                  </p>
                  <p class="mb-1 text-subtitle-1">
                    <b>Height</b> {{ pokemon.height }}
                  </p>
                  <p class="mb-1 text-subtitle-1">
                    <b>Experience</b> {{ pokemon.base_experience }}
                  </p>
                </div>
              </div>

              <div>
                <h2 class="mt-5">
                  <v-icon color="red"> mdi-sword </v-icon>
                  PRIMARY MOVES
                </h2>
                <div v-if="pokemon.moves" class="pl-8 mt-1">
                  <p
                    v-for="index of 4"
                    :key="index"
                    class="mb-1 text-subtitle-1"
                  >
                    {{ pokemon.moves[index]?.move.name }}
                  </p>
                </div>
              </div>
              <h2 class="mt-5">
                <v-icon color="red"> mdi-puzzle </v-icon>
                ABILITIES
              </h2>
              <div v-if="pokemon.abilities" class="pl-8">
                <p
                  v-for="ability of pokemon.abilities"
                  :key="ability.id"
                  class="mb-1 text-subtitle-1"
                >
                  {{ ability.ability.name }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="text-md-left">
              <h2>
                <v-icon color="red"> mdi-lightning-bolt </v-icon>
                STATS
              </h2>
              <div v-if="pokemon.abilities" class="mt-2 ml-10">
                <p
                  v-for="stat of pokemon.stats"
                  :key="stat.id"
                  class="text-md-left mb-5"
                >
                  <b>
                    {{ stat.stat.name }}
                  </b>
                  <v-progress-linear
                    class="mb-3"
                    :model-value="stat.base_stat"
                    color="primary"
                    height="20"
                  >
                    <template v-slot:default="{ value }">
                      <strong>{{ parseInt(value) }}</strong>
                    </template>
                  </v-progress-linear>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-row>
    <v-col cols="12" md="8" class="d-flex justify-space-between mx-auto mt-5">
      <v-row>
        <v-col cols="6" class="text-left">
          <v-btn
            color="red"
            rounded="xl"
            class="ml-3"
            v-if="pokemon.id > 1"
            :to="`/pokemon/${pokemon.id - 1}`"
          >
            <v-icon> mdi-arrow-left-thick </v-icon>
            PREVIUS
          </v-btn>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            color="red"
            rounded="xl"
            class="mr-3"
            v-if="pokemon.id < 600"
            :to="`/pokemon/${pokemon.id + 1}`"
          >
            NEXT
            <v-icon> mdi-arrow-right-thick </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CatchPokemon from "@/components/common/CatchPokemon.vue";
export default {
  name: "CardDetailPokemon",
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
}

.pokemon-avatar img {
  width: 80%;
  height: 250px;
  object-fit: contain;
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
