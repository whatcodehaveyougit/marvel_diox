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
      let characterComicsCopy = deepCopy(state.characterComics)
      characterComicsCopy.push( newCharacter )
      return {
        characterComics: characterComicsCopy
      }
    },
    DELETE_CHARACTER({ state }, characterToDeleteID){
      let characterComicsCopy = deepCopy(state.characterComics)
      let newArray = characterComicsCopy.filter(character => character.id != characterToDeleteID )
      return {
        characterComics: newArray
      }
    }
  },
  actions: {
      fetchCharactersFromAPI: async ({hash}) => {
        const result = await fetchData( './characters' );
          myStore.mutate(hash, 'SET_CHARACTER_COMICS', { result })
      },
  },
};

// A module must be registered to a store
myStore.register('myFirstModule', myFirstModule);

myStore.dispatch('myFirstModule', 'fetchCharactersFromAPI', {})

myStore.subscribe('myFirstModule', (newState: any) => {
  console.log('myFirstModule mutation:', newState);
})

export default myStore;
