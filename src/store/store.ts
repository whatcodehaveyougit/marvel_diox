import { fetchData } from '../utils/utils.ts'
import useStore, { Module } from 'diox/connectors/react';
import Store from 'diox';
import { deepCopy } from 'basx';

const myStore = new Store();

const myFirstModule: Module<{ characterComics: []; }> = {
  state: {
    characterComics: [],
  },
  mutations: {
   SET_CHARACTER_COMICS({ state }, apiResponse) {
        if ( apiResponse ){
          return {
            ...state,
            characterComics: apiResponse.result.data.results
          };
        }
      },
    ADD_CHARACTER({ state}, newCharacter){
      let array = deepCopy(state)
      array.characterComics.push( newCharacter )
      return {
        characterComics: array.characterComics
      }
    }
  },
  actions: {
      myFirstAction: async ({hash}) => {
        const result = await fetchData( './characters' );
        console.log(result)
        if(result.data.results.length > 0){
          myStore.mutate(hash, 'SET_CHARACTER_COMICS', { result })
        }
      },

  },
};

// The module must be registered to a store
myStore.register('myFirstModule', myFirstModule);

myStore.dispatch('myFirstModule', 'myFirstAction', {})

myStore.subscribe('myFirstModule', (newState: any) => {
  console.log('myFirstModule mutation:', newState);
})

export default myStore;
