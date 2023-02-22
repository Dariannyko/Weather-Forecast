import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../shared/const";
import { REQUEST_STATUS } from "../shared/const";
import { timeLineForecastNormalizer } from "../shared/normalizer";

export const getTimeLineForecast = createAsyncThunk(
  "timeLineForecast/getTimeLineForecast",
  async function (cityItem, { rejectWithValue }) {
    try {
      const timelineURL = `${API_URL.serverTimelineURL}?q=${cityItem}&cnt=3&appid=${API_URL.apiKey}&units=metric`;
      let response = await fetch(timelineURL);
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      let json = await response.json();

      const newForecast = json.list.map((item) => {
        const weather = {
          day: item.dt_txt,
          month: item.dt_txt,
          time: item.dt_txt,
          temperature: item.main.temp,
          feelsLike: item.main.feels_like,
          weather: item.weather[0].main,
          icon: item.weather[0].icon,
        };
        return timeLineForecastNormalizer(weather)
      });
      return newForecast;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const timeLineForecastSlice = createSlice({
  name: "timeLineForecast",
  initialState: {
    timeLineForecast: "",
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTimeLineForecast.pending]: (state) => {
      state.status = REQUEST_STATUS.loading;
      state.error = null;
    },
    [getTimeLineForecast.fulfilled]: (state, action) => {
      state.status = REQUEST_STATUS.resolved;
      state.timeLineForecast = action.payload;
      state.error = null;
    },
    [getTimeLineForecast.rejected]: (state, action) => {
      state.status = REQUEST_STATUS.rejected;
      state.error = action.payload;
    },
  },
});

export default timeLineForecastSlice.reducer;
