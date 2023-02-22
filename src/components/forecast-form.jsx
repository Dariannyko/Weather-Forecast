import { useContext, useState } from "react";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import { ForecastContext } from "../shared/forecast-context";

const defaultValue = "";

const ForecastForm = () => {
  const [city, setCity] = useState(defaultValue);
  const value = useContext(ForecastContext);

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <form
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
          value.getForecast(city);
          setCity(defaultValue);
        }}
      >
        <Input
          type="text"
          placeholder="City"
          className="city-input"
          onChange={onChange}
          value={city}
          variant="plain"
          endDecorator={<SearchIcon />}
          sx={{
            "--Input-focusedHighlight": "none",
            "--Input-radius": "0",
            borderBottom: "2px solid #fff",
          }}
        />
      </form>
    </>
  );
};

export { ForecastForm };
