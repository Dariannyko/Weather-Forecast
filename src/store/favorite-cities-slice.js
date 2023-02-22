import { nanoid } from "nanoid";
import { getLocalItem } from "../shared/get-local-item";
import { createSlice } from "@reduxjs/toolkit";
import { FAVORITE_CITIES } from "../shared/const";

const initialFavoritesState = getLocalItem(FAVORITE_CITIES) || [];

const favoriteCitiesSlice = createSlice({
  name: "favorites",
  initialState: {
    cities: initialFavoritesState,
  },
  reducers: {
    addFavorites: (state, action) => {
      if (state.cities.find((item) => item.city === action.payload)) {
        state.cities = state.cities.filter(
          (item) => item.city !== action.payload
        );
      } else {
        state.cities = [
          ...state.cities,
          { city: action.payload, id: nanoid() },
        ];
      }
    },
    deleteFavorites: (state, action) => {
      state.cities = state.cities.filter(
        (item) => item.city !== action.payload
      );
    },
  },
});

export const { addFavorites, deleteFavorites } = favoriteCitiesSlice.actions;
export default favoriteCitiesSlice.reducer;
