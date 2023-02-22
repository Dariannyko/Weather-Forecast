import { useContext } from "react";
import { ForecastContext } from "../shared/forecast-context";
import ListItem from "@mui/material/ListItem";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
const LocationItem = ({ city, deleteFavoriteCity }) => {
  const value = useContext(ForecastContext);

  return (
    <ListItem
      sx={{ margin: "0px", display: "flex", justifyContent: "space-between" }}
    >
      <Typography
        variant="h5"
        component="h1"
        fontWeight={500}
        onClick={() => {
          value.getForecast(city);
        }}
      >
        {city}
      </Typography>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => {
          deleteFavoriteCity(city);
        }}
      >
        <ClearIcon />
      </IconButton>
    </ListItem>
  );
};

export { LocationItem };
