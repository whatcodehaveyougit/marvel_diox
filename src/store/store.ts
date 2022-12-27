import { fetchData } from '../utils/utils.ts'
import useStore, { Module } from 'diox/connectors/react';
import Store from 'diox';
// import {
//   mutate,
// } from '@perseid/client'; // where is this ßrom ??
const myStore = new Store();
export default myStore;

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
      }
  },
  actions: {
      myFirstAction: async ({hash}) => {
        const result = await fetchData( './characters' );
        if(result.data.results.length > 0){
          myStore.mutate(hash, 'SET_CHARACTER_COMICS', { result })
        }
      },
  },
};

// The module must be registered to a store
myStore.register('myFirstModule', myFirstModule);

myStore.dispatch('myFirstModule', 'myFirstAction', {})