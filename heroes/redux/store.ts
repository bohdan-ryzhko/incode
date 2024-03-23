import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import heroesReducer, { goNextPage, goPreviousPage, fetchPeople, fetchHomeWorld, clearAdditionalInfo, fetchSpecies } from './heroes/slice';
import favoriteHeroesReducer, { addFavoriteHero, clearFavoriteHeroes } from './favoriteHeroes/slice';

axios.defaults.baseURL = 'https://swapi.py4e.com/api/';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  heroes: heroesReducer,
  favoriteHeroes: persistReducer(persistConfig, favoriteHeroesReducer),
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export {
  store,
  persistor,
  fetchPeople,
  goNextPage,
  goPreviousPage,
  addFavoriteHero,
  clearFavoriteHeroes,
  fetchHomeWorld,
  clearAdditionalInfo,
  fetchSpecies,
};
