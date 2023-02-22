import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./details-forecast-tab";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const CustomBox = styled(Box)(({ theme }) => ({
  display: theme.box.display,
  justifyContent: theme.box.justifyContent,
}));

const TimeLineItem = ({
  day,
  month,
  time,
  temperature,
  feelsLike,
  weather,
  icon,
}) => {
  return (
    <Card
      sx={{
        background:
          "linear-gradient(270deg, rgba(0, 134, 207, 0.246) -6.38%, rgba(2, 110, 189, 0.408) 107.1%)",
        color: "#fff",
        padding: 2.4,
        lineHeight: 0.5,
        borderRadius: 2,
      }}
    >
      <ThemeProvider theme={theme}>
        <CustomBox>
          <Typography
            variant="h5"
            component="h4"
            fontWeight="600"
            marginBottom={3}
          >
            <span>{day || "--"}</span> <span>{month || "--"}</span>
          </Typography>
          <Typography variant="h6" component="h4">
            {time || "--"}
          </Typography>
        </CustomBox>
        <CustomBox>
          <Box>
            <Box display="flex" alignItems="center">
              <DeviceThermostatIcon sx={{ fontSize: 18 }} />
              <Typography variant="h6" component="span">
                {typeof temperature === "undefined" ? "--" : temperature}°
              </Typography>
            </Box>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "#ffffff99" }}
            >
              Like: {typeof feelsLike === "undefined" ? "--" : feelsLike}°
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "#ffffff99" }}
            >
              {weather || "--"}
            </Typography>
            <Box>
              <img
                width={40}
                src={
                  icon
                    ? `http://openweathermap.org/img/wn/${icon}@2x.png`
                    : "./rain.svg"
                }
              />
            </Box>
          </Box>
        </CustomBox>
      </ThemeProvider>
    </Card>
  );
};

export { TimeLineItem };
