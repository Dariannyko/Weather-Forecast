import { Box, Typography } from "@mui/material";

const RequestError = ({ forecastError }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="body1" component="h2" fontWeight={600}>
        Упс: {forecastError}...
      </Typography>
    </Box>
  );
};
export { RequestError };
