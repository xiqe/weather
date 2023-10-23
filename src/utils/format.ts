import weatherCodeMap from './dict'

type WeatherCode = {
  w_type: string;
  icon: string;
};

type DailyData = {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  winddirection_10m_dominant: string[];
  windspeed_10m_max: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
};

type FormattedDailyData = {
  time: string;
  weathercode: number;
  highTemp: number;
  lowTemp: number;
  windDirection: string;
  windSpeed: number;
  sunRise: string;
  sunSet: string;
  uv: number;
};

const weathercodeToContext = (weathercode: number): WeatherCode => {
  return weatherCodeMap[weathercode]
}

const dailyListFormat = (list: DailyData): FormattedDailyData[] => {
  return list.time.map((time, index) => {
    const {
      weathercode,
      temperature_2m_max,
      temperature_2m_min,
      winddirection_10m_dominant,
      windspeed_10m_max,
      sunrise,
      sunset,
      uv_index_max
    } = list;

    return {
      time,
      weathercode: weathercode[index],
      highTemp: Math.round(temperature_2m_max[index]),
      lowTemp: Math.round(temperature_2m_min[index]),
      windDirection: winddirection_10m_dominant[index],
      windSpeed: windspeed_10m_max[index],
      sunRise: sunrise[index],
      sunSet: sunset[index],
      uv: uv_index_max[index]
    };
  });
}

export { weathercodeToContext, dailyListFormat }
