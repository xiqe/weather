type WeatherCode = {
  w_type: string;
  icon: string;
};

const weatherCodeMap: Record<number, WeatherCode> = {
  // 晴
  0: { w_type: 'Clear sky', icon: 'icon-weather_0' },
  // 主要晴朗，部分多云，阴天
  1: { w_type: 'Mainly clear', icon: 'icon-weather_1' },
  2: { w_type: 'Partly cloudy', icon: 'icon-weather_2' },
  3: { w_type: 'Overcast', icon: 'icon-weather_3' },
  // 雾和沉积雾凇
  45: { w_type: 'Fog', icon: 'icon-weather_45' },
  48: { w_type: 'Depositing rime fog', icon: 'icon-weather_48' },
  // 毛毛雨：轻度、中度和密集
  51: { w_type: 'Light drizzle', icon: 'icon-weather_51' },
  53: { w_type: 'Drizzle', icon: 'icon-weather_53' },
  55: { w_type: 'Dense drizzle', icon: 'icon-weather_55' },
  // 冻毛毛雨：轻度和密度
  56: { w_type: 'Light freezing drizzle', icon: 'icon-weather_51' },
  57: { w_type: 'Dense freezing drizzle', icon: 'icon-weather_55' },
  // 雨：小、中和大强度
  61: { w_type: 'Light rain', icon: 'icon-weather_53' },
  63: { w_type: 'Rain', icon: 'ficon-weather_63' },
  65: { w_type: 'Heavy rain', icon: 'icon-weather_82' },
  // 冻雨：轻度和大强度
  66: { w_type: 'Freezing rain', icon: 'icon-weather_51' },
  67: { w_type: 'Heavy freezing rain', icon: 'icon-weather_82' },
  // 雪：小、中和大强度
  71: { w_type: 'Light snow', icon: 'icon-weather_71' },
  73: { w_type: 'Snow', icon: 'icon-weather_73' },
  75: { w_type: 'Heavy snow', icon: 'icon-weather_75' },
  // 雪粒
  77: { w_type: 'Snow grains', icon: 'icon-weather_77' },
  // 阵雨：小、中和暴雨
  80: { w_type: 'Light rain showers', icon: 'icon-weather_53' },
  81: { w_type: 'Rain showers', icon: 'icon-weather_63' },
  82: { w_type: 'Heavy rain showers', icon: 'icon-weather_82' },
  // 阵雪：小和大强度
  85: { w_type: 'Snow showers slight', icon: 'icon-weather_73' },
  86: { w_type: 'Snow showers heavy', icon: 'icon-weather_77' },
  // 雷暴：轻度或中度
  95: { w_type: 'Thunderstorm', icon: 'icon-weather-95' },
  // 伴有轻度和大冰雹的雷暴
  96: { w_type: 'Thunderstorm with slight', icon: 'icon-weahter_96' },
  99: {
    w_type: 'Thunderstorm with heavy hail',
    icon: 'icon-weather_99'
  }
}

export default weatherCodeMap
