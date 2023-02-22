import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Help = () => {
  return (
    <Box paddingX={1}>
      <Link to="/">
        <Button variant="outlined" size="medium" sx={{ borderRadius: 10 }}>
          Back
        </Button>
      </Link>

      <Box width="65%" margin="20px auto 0" textAlign="center">
        <Box>
          <img width={280} src="/cloud-and-sun.png" alt="Clouds and sun" />
        </Box>
        <Box>
          <Typography variant="h4" component="h2" fontWeight={600}>
            Hi there!
          </Typography>
          <Typography variant="body2" component="p">
            In this weather app you can check: both a current forecast for now
            in the tab Now and a forecast with a three-hour interval in the tab
            Forecast.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Help };
