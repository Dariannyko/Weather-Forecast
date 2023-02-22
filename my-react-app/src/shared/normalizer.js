import { format } from "date-fns";
import { processingTime } from "./processing-time";

export const timeLineForecastNormalizer = ({
    day,
    month,
    time,
    temperature,
    feelsLike,
    weather,
    icon,
  }) => {
    return {
      day: format(new Date(day), "d"),
      month: format(new Date(month), "MMM"),
      time: format(new Date(time), "HH:mm"),
      temperature: Math.round(temperature),
      feelsLike: Math.round(feelsLike),
      weather,
      icon,
    };
  };

  export const currentForecastNormalizer = (
    {degrees,
    feelsLike,
    icon,
    forecastCity,
    sunrise,
    sunset,
    timezone,
    detailsWeather}
  ) => {
    const sunriseTime = processingTime(sunrise, timezone);
    const sunsetTime = processingTime(sunset, timezone);
    return {
      degrees: Math.round(degrees),
      degreesFeelsLike: Math.round(feelsLike),
      icon,
      forecastCity,
      sunrise: sunriseTime,
      sunset: sunsetTime,
      detailsWeather,
    };
  };
  