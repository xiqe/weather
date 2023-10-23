import axios from 'axios'

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?'
const LOCAL_URL = 'https://geocoding-api.open-meteo.com/v1/search?'

const weatherApi = (latitude: number, longitude: number) => {
  return axios.get(
    `${WEATHER_URL}latitude=${latitude}&longitude=${longitude}&timezone=auto&temperature_unit=celsius&windspeed_unit=kmh&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,winddirection_10m_dominant,windspeed_10m_max,sunrise,sunset,uv_index_max`
  )
}

const loaclApi = (local: string) => {
  return axios.get(`${LOCAL_URL}name=${local}&count=10`)
}

export { weatherApi, loaclApi }
