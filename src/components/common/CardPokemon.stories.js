// YourComponent.stories.js

import CardPokemon from './CardPokemon.vue';

import * as CatchPokemon from './CatchPokemon.stories'

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'CardPokemon',
  component: CardPokemon,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
  components: { CardPokemon },
  setup() {
    //π The args will now be passed down to the template
    return { args, ...CatchPokemon.actionsData };
  },
  template: '<CardPokemon v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  pokemon: {    
    "id": 1,
    "name": "Pikachu",
    "sprites": {
      "other": {
        "dream_world": {
          "front_default" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }          
      }
    }
    
  }
};