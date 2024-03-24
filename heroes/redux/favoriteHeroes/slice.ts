import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Gender, InitialStateFavoriteHeroes } from "../../d";

const initialState: InitialStateFavoriteHeroes = {
  male: [],
  female: [],
  other: []
}

const favoriteHeroesSlice = createSlice({
  name: "favorite-heroes",
  initialState,
  reducers: {
    addFavoriteHero(state, { payload }: PayloadAction<{ type: Gender, name: string }>) {
      switch (payload.type) {
        case "male":
          if (state.male.includes(payload.name)) {
            const removedIndex = state.male.findIndex((name) => name === payload.name);
            state.male.splice(removedIndex, 1);
          } else {
            state.male.push(payload.name);
          }
          break;
        case "female":
          if (state.female.includes(payload.name)) {
            const removedIndex = state.female.findIndex((name) => name === payload.name);
            state.female.splice(removedIndex, 1);
          } else {
            state.female.push(payload.name);
          }
          break;
        default:
          if (state.other.includes(payload.name)) {
            const removedIndex = state.other.findIndex((name) => name === payload.name);
            state.other.splice(removedIndex, 1);
          } else {
            state.other.push(payload.name);
          }
      }
    },
    clearFavoriteHeroes(state) {
      state.male = [];
      state.female = [];
      state.other = [];
    }
  },
});

export const { addFavoriteHero, clearFavoriteHeroes } = favoriteHeroesSlice.actions;
export default favoriteHeroesSlice.reducer;
