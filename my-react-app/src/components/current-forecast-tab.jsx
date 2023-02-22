import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RequestError } from "./request-error";
import { Box, Typography } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CurrentForecastTab = ({ addFavoriteCity }) => {
  const favoriteCities = useSelector((state) => state.favorites.cities);
  const forecastError = useSelector((state) => state.currentForecast.error);
  const forecast = useSelector(
    (state) => state.currentForecast.currentForecast
  );
  if (forecastError) {
    return <RequestError forecastError={forecastError} />;
  }

  return (
    <Box display="flex" flexDirection="column" height="100%" padding={2}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <DeviceThermostatIcon sx={{ fontSize: 44 }} />
          <Typography variant="h3" component="p" fontWeight={600}>
            {` ${
              typeof forecast?.degrees === "undefined" ? "--" : forecast.degrees
            }`}
          </Typography>
          <Typography variant="h4" component="p" marginBottom="auto">
            &#176;
          </Typography>
        </Box>
        <Link to="help">
          <IconButton>
            <HelpOutlineIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Link>
      </Box>
      <Box margin="auto">
        <img
          src={
            forecast?.icon
              ? `http://openweathermap.org/img/wn/${forecast.icon}@4x.png`
              : "./cloud.svg"
          }
          alt="icon of cloud"
          width={90}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component="h2" fontWeight={600} fontSize={32}>
          {forecast?.forecastCity || "City"}
        </Typography>
        <IconButton
          color="inherit"
          aria-label="add to favorites"
          onClick={addFavoriteCity}
        >
          {favoriteCities.find(
            (item) => item.city === forecast?.forecastCity
          ) ? (
            <FavoriteIcon
              sx={{ color: "#ff7c7c", fill: "#ff7c7c", fontSize: 26 }}
            />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 26 }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export { CurrentForecastTab };
