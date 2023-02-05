import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
export const usePokemonStore = defineStore("PokemonStore", {
  
  state: () => {
    return {      
      userPokemons: useStorage('pokemons', [])
    }
  },
  actions: {
    catch(user, pokemonId) {
      
      const pokemon = this.userPokemons.findIndex(
          (pokemon) =>
            pokemon.user === user &&
            pokemon.pokemonId === pokemonId
      );      
      
      if (pokemon === -1) { // not catched
        this.userPokemons.push({'user': user, 'pokemonId': pokemonId })
      } else {  
        this.userPokemons.splice(pokemon, 1)
      } 

    },
    
 }
})
