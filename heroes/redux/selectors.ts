import { AppState } from "./store";

export const selectHeroes = (state: AppState) => state.heroes;

export const selectFavoriteHeroes = (state: AppState) => state.favoriteHeroes;
