import { useSelector, useDispatch } from "react-redux";
import { ForecastForm } from "../components/forecast-form";
import { ForecastSection } from "../components/forecast-section";
import { FavoriteLocations } from "../components/favorite-locations";
import {
  addFavorites,
  deleteFavorites,
} from "../store/favorite-cities-slice";
import { Box } from "@mui/material";

const Forecast = () => {
  const dispatch = useDispatch();
  const forecast = useSelector(
    (state) => state.currentForecast.currentForecast
  );

  const addFavoriteCity = () => {
    if (!forecast.forecastCity) return;
    dispatch(addFavorites(forecast.forecastCity));
  };

  const deleteFavoriteCity = (cityItem) => {
    dispatch(deleteFavorites(cityItem));
  };

  return (
    <Box
      maxWidth="sm"
      border={2}
      sx={{
        background:
          "linear-gradient(6.74deg, rgba(149, 214, 252, 0.5) -20.07%, rgba(158, 212, 247, 0.5) 118.01%)",
      }}
    >
      <ForecastForm />
      <Box display="flex">
        <ForecastSection addFavoriteCity={addFavoriteCity} />
        <FavoriteLocations deleteFavoriteCity={deleteFavoriteCity} />
      </Box>
    </Box>
  );
};

export { Forecast };
