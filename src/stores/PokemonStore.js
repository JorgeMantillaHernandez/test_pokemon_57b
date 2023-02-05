import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
export const usePokemonStore = defineStore("PokemonStore", {
  
  state: () => {
    return {      
      userPokemons: useStorage('pokemons', [])
    }
  },
  actions: {
    catch(userId, pokemonId) {      
      const pokemon = this.userPokemons.findIndex(
          (pokemon) =>
            pokemon.userId === userId &&
            pokemon.pokemonId === pokemonId
      );      
      
      if (pokemon === -1) { // not catched
        this.userPokemons.push({'userId': userId, 'pokemonId': pokemonId })
      } else {  
        this.userPokemons.splice(pokemon, 1)
      } 
    },
    
 }
})
