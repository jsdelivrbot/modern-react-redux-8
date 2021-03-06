import axios from 'axios';

const API_KEY = '224b7da19b9e9c30983d4c504b9c491e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&units=imperial`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export const fetchWeather = async city => {
  const url = `${ROOT_URL}&q=${city},us`;
  try {
    const response = await axios.get(url);

    return {
      type: FETCH_WEATHER,
      response
    };
  } catch ({ message }) {
    return {
      type: FETCH_WEATHER_ERROR,
      error: message
    };
  }
};
