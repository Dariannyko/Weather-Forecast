import { useSelector } from "react-redux";
import { TimeLineItem } from "./timeline-item";
import { RequestError } from "./request-error";
import { Box, Typography } from "@mui/material";

const TimelineForecastTab = () => {
  const timeLine = useSelector(
    (state) => state.timeLineForecast.timeLineForecast
  );
  const forecastError = useSelector((state) => state.timeLineForecast.error);
  const forecast = useSelector(
    (state) => state.currentForecast.currentForecast
  );

  if (forecastError) {
    return <RequestError forecastError={forecastError} />;
  }

  return (
    <Box height="100%" paddingTop={2}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight={600}
        marginBottom={3}
        marginLeft={2}
      >
        {forecast?.forecastCity || "City"}
      </Typography>
      <Box
        sx={{
          padding: 0,
          height: 262,
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
        <Box
          paddingX={2}
          paddingBottom={2}
          display="flex"
          flexDirection="column"
          rowGap={2}
        >
          {timeLine ? (
            timeLine.map(
              (
                { day, month, time, temperature, feelsLike, weather, icon },
                index
              ) => (
                <TimeLineItem
                  key={index}
                  day={day}
                  month={month}
                  time={time}
                  temperature={temperature}
                  feelsLike={feelsLike}
                  weather={weather}
                  icon={icon}
                />
              )
            )
          ) : (
            <TimeLineItem />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { TimelineForecastTab };
