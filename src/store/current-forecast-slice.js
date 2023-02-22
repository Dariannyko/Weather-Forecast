import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CURRENT_CITY } from "../shared/const";
import { API_URL } from "../shared/const";
import { ValidationError } from "../shared/validation-error";
import { REQUEST_STATUS } from "../shared/const";
import { currentForecastNormalizer } from "../shared/normalizer";

export const getCurrentForecast = createAsyncThunk(
  "currentForecast/getCurrentForecast",
  async function (cityItem, { rejectWithValue }) {
    try {
      const URL = `${API_URL.serverForecastUrl}?q=${cityItem}&appid=${API_URL.apiKey}&units=metric`;
      let response = await fetch(URL);

      if (response.status === 400 || response.status === 404) {
        throw new ValidationError("отсутствует название города");
      }
      const json = await response.json();
      localStorage.setItem(CURRENT_CITY, JSON.stringify(json.name));
      const forecast = {
        degrees: json.main.temp,
        degreesFeelsLike: json.main.feels_like,
        icon: json.weather[0].icon,
        forecastCity: json.name,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
        timezone: json.timezone,
        detailsWeather: json.weather[0].main,
      };
      return currentForecastNormalizer(forecast)
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const currentForecastSlice = createSlice({
  name: "currentForecast",
  initialState: {
    currentForecast: "",
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCurrentForecast.pending]: (state) => {
      state.status = REQUEST_STATUS.loading;
      state.error = null;
    },
    [getCurrentForecast.fulfilled]: (state, action) => {
      state.status = REQUEST_STATUS.resolved;
      state.currentForecast = action.payload;
      state.error = null;
    },
    [getCurrentForecast.rejected]: (state, action) => {
      state.status = REQUEST_STATUS.rejected;
      state.error = action.payload;
    },
  },
});

export default currentForecastSlice.reducer;
