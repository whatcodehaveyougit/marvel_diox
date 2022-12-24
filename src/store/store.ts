import { fetchData } from '../utils/utils.ts'
import useStore, { Module } from 'diox/connectors/react';
import {
  mutate,
} from '@perseid/client'; // where is this from ??
const myStore = new Store();

const myFirstModule: Module<{ characterComics: []; }> = {
  state: {
    characterComics: [],
  },
  mutations: {
   SET_CHARACTER_COMICS({ state }, apiResponse) {
        return {
          ...state,
          characterComics: apiResponse.data.results
        };
      },
  },
  actions: {
      async () => { // Matt - How to write this action ? with a promise?
        const result = await fetchData( './characters' );
        mutate(hash, 'SET_CHARACTER_COMICS', { result })
      }
  },
};

// The module must be registered to a store
myStore.register('myFirstModule', myFirstModule);

