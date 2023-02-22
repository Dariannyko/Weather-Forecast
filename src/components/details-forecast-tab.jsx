import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RequestError } from "./request-error";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const CustomListItem = styled(ListItem)(({ theme }) => ({
  margin: theme.listItem.margin,
  padding: theme.listItem.padding,
  fontSize: theme.listItem.fontSize,
}));
export const theme = createTheme({
  listItem: {
    margin: "0px",
    padding: "4px 8px",
    fontSize: "18px",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const DetailsForecastTab = () => {
  const forecastError = useSelector((state) => state.currentForecast.error);
  const forecast = useSelector(
    (state) => state.currentForecast.currentForecast
  );
  if (forecastError) {
    return <RequestError forecastError={forecastError} />;
  }

  const weatherList = {
    "Feels like": `${forecast.degrees || "--"}°`,
    Weather: forecast.detailsWeather || "--",
    Sunrise: forecast.sunrise || "--",
    Sunset: forecast.sunset || "--",
  };

  return (
    <Box height="100%" padding={2}>
      <Typography variant="h4" component="h1" fontWeight={600} marginBottom={3}>
        {forecast?.forecastCity || "City"}
      </Typography>
      <Card
        sx={{
          background:
            "linear-gradient(270deg, rgba(0, 134, 207, 0.246) -6.38%, rgba(2, 110, 189, 0.408) 107.1%)",
          borderRadius: 2,
          padding: 2.5,
        }}
      >
        <Box display="flex" alignItems="center" paddingY={1}>
          <DeviceThermostatIcon fontSize="large" sx={{ color: "#fff" }} />
          <Typography variant="h4" component="p" fontWeight={600} color="#fff">
            {forecast?.degrees || "--"}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            marginBottom="auto"
            color="#fff"
          >
            &#176;
          </Typography>
        </Box>
        <ThemeProvider theme={theme}>
          <List sx={{ padding: 0, color: "#fff" }}>
            {Object.keys(weatherList).map((item, index) => (
              <CustomListItem
                key={index}
              >{`${item}: ${weatherList[item]}`}</CustomListItem>
            ))}
          </List>
        </ThemeProvider>
      </Card>
    </Box>
  );
};

export { DetailsForecastTab };
