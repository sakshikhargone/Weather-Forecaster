import axios from "axios";

export const getWeatherForecast = async (city, day = 4) => {
  const details = {
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=7466d3b30aef4a7eb8c125952241309&q=${city}&days=${day}&aqi=yes&alerts=no`,
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status <= 500; // Reject only if the status code is equal or more than 500
    },
  };

  const result = await axios.request(details);

  if (result.status === 200 && result.data) {
    const { location, current, forecast } = result.data;

    return {
      location,
      current,
      forecast,
    };
  } else {
    return null;
  }
};
