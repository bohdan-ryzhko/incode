import { createSlice } from "@reduxjs/toolkit";
import { fetchPeople, fetchHomeWorld, fetchSpecies } from "./requests";
import { InitialStateHeroes } from "../../d";

const initialState: InitialStateHeroes = {
  isLoading: false,
  page: 1,
  femaleFans: 0,
  maleFans: 0,
  othersFans: 0,
  people: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    species: [],
  },
  home: [],
  species: [],
  error: null,
}

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    goNextPage(state) {
      if (state.people.next) {
        state.page += 1;
      }
    },
    goPreviousPage(state) {
      if (state.people.previous) {
        state.page -= 1;
      }
    },
    clearAdditionalInfo(state) {
      state.home = [];
      state.species = [];
    }
  },
  extraReducers: (builer) => {
    builer
      .addCase(fetchPeople.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.people = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchHomeWorld.fulfilled, (state, action) => {
        state.error = null;
        state.home.push(action.payload);
      })
      .addCase(fetchHomeWorld.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.error = null;
        state.species.push(action.payload);
      })
      .addCase(fetchSpecies.rejected, (state, action) => {
        state.error = action.payload;
      })
  }
});

export {
  fetchPeople,
  fetchHomeWorld,
  fetchSpecies,
};
export const { goNextPage, goPreviousPage, clearAdditionalInfo } = heroesSlice.actions;
export default heroesSlice.reducer;
