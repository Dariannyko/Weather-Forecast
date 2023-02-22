import { LocationItem } from "./location-item";
import { useSelector } from "react-redux";
import { FAVORITE_CITIES } from "../shared/const";
import List from "@mui/material/List";

const LocationList = ({ deleteFavoriteCity }) => {
  const favoriteCities = useSelector((state) => state.favorites.cities);
  localStorage.setItem(FAVORITE_CITIES, JSON.stringify(favoriteCities));

  return (
    <List sx={{ padding: "20px 10px" }}>
      {favoriteCities.map(({ city, id }) => (
        <LocationItem
          key={id}
          city={city}
          deleteFavoriteCity={deleteFavoriteCity}
        />
      ))}
    </List>
  );
};

export { LocationList };
