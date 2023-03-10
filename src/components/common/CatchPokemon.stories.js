// YourComponent.stories.js

import CatchPokemon from './CatchPokemon.vue';


//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'CatchPokemon',
  component: CatchPokemon,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
  components: { CatchPokemon },
  setup() {
    //π The args will now be passed down to the template
    return { args };
  },
  template: '<CatchPokemon v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  typeButton: "pokeball"
};