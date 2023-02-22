import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Preloader } from "./components/preloader/preloader";
import { getLocalItem } from "./shared/get-local-item.js";
import { ForecastContext } from "./shared/forecast-context.js";
import { getCurrentForecast } from "./store/current-forecast-slice";
import { getTimeLineForecast } from "./store/timeline-forecast-slice";
import { CURRENT_CITY, FAVORITE_CITIES } from "./shared/const";
import { Box } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteList = getLocalItem(FAVORITE_CITIES);
    const currentCity = getLocalItem(CURRENT_CITY);

    if (currentCity) {
      getForecast(currentCity);
    }

    if (!currentCity && favoriteList?.length) {
      getForecast(favoriteList[0].city);
    }

    setIsLoading(false);
  }, []);

  const getForecast = (cityItem) => {
    dispatch(getCurrentForecast(cityItem));
    dispatch(getTimeLineForecast(cityItem));
  };

  const value = { getForecast };

  return (
    <ForecastContext.Provider value={value}>
      <div className="App">
        <Box
          maxWidth={628}
          minHeight={460}
          padding={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginX="auto"
          sx={{
            background:
              "linear-gradient(0.08deg, #f9c6c6bf 7.94%, #eae7e7bf 47.74%, #C2DDEC 73.84%)",
          }}
        >
          {isLoading ? <Preloader /> : <Outlet />}
        </Box>
      </div>
    </ForecastContext.Provider>
  );
}

export default App;
