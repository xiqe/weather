import weather_type from './dict'

const weathercodeToContext = (weathercode: number) => {
  return weather_type[weathercode]
}

const dailyListFormat = (list: any) => {
  return list.time.map((time: string, index: number) => {
    return {
      time: time,
      weathercode: list.weathercode[index],
      highTemp: Math.round(list.temperature_2m_max[index]),
      lowTemp: Math.round(list.temperature_2m_min[index]),
      windDirection: list.winddirection_10m_dominant[index],
      windSpeed: list.windspeed_10m_max[index],
      sunRise: list.sunrise[index],
      sunSet: list.sunset[index],
      uv: list.uv_index_max[index]
    }
  })
}

export { weathercodeToContext, dailyListFormat }
