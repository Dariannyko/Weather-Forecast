import { CurrentForecastTab } from "./current-forecast-tab";
import { DetailsForecastTab } from "./details-forecast-tab";
import { TimelineForecastTab } from "./timeline-forecast-tab";
import { Box } from "@mui/material";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";

const ForecastSection = ({ addFavoriteCity }) => {
  const TABS = {
    Now: <CurrentForecastTab addFavoriteCity={addFavoriteCity} />,
    Details: <DetailsForecastTab />,
    Forecast: <TimelineForecastTab />,
  };

  return (
    <Box borderRight={2}>
      <Tabs
        size="sm"
        defaultValue={0}
        sx={{
          width: 298,
          height: "100%",
          overflow: "auto",
          "--List-padding": "0",
          "--Tabs-gap": "0px",
        }}
      >
        {Object.values(TABS).map((name, index) => (
          <TabPanel value={index} key={index}>
            {name}
          </TabPanel>
        ))}
        <TabList
          variant="plain"
          sx={{
            "--List-item-radius": 0,
            "--List-padding": 0,
            [`& .${tabClasses.root}`]: {
              fontWeight: "lg",
              flex: 1,
              bgcolor: "background.body",
              [`&.${tabClasses.selected}`]: {
                width: "100%",
                bgcolor: "#FF7C7C",
              },
              borderTop: "2px solid #fff",
            },
          }}
        >
          {Object.keys(TABS).map((name, index) => (
            <Tab sx={{ py: 1.5 }} key={index}>
              {name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export { ForecastSection };
