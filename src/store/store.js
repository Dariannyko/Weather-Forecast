import { configureStore } from "@reduxjs/toolkit";
import currentForecastReducer from "./current-forecast-slice";
import timeLineForecast from "./timeline-forecast-slice";
import favoritesReducer from "./favorite-cities-slice";

export const store = configureStore({
  reducer: {
    currentForecast: currentForecastReducer,
    timeLineForecast: timeLineForecast,
    favorites: favoritesReducer,
  },
});
