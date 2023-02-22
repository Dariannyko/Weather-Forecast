import { LocationList } from "./location-list";
import { Box, Typography } from "@mui/material";

const FavoriteLocations = ({ deleteFavoriteCity }) => {
  return (
    <Box width="300px" height="386px">
      <Box borderBottom={2} padding={2.5}>
        <Typography variant="h5" component="h1" fontWeight="600">
          Added Locations:
        </Typography>
      </Box>
      <Box
        sx={{
          height: 312,
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#ffffff33",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ffffff99",
            borderRadius: 20,
          },
        }}
      >
        <LocationList deleteFavoriteCity={deleteFavoriteCity} />
      </Box>
    </Box>
  );
};

export { FavoriteLocations };
