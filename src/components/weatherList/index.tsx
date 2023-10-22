import { weathercodeToContext } from '@/utils/format'
import './index.less'

interface Props {
  dailyList: Array<any>
}

function WeatherList({ dailyList }: Props) {
  return (
    <ul className="weather_week__list">
      <li className="tit">Recent Weather</li>
      {dailyList.length > 0 &&
        dailyList.map((item, index) => (
          <li key={item.time}>
            <span className="date">
              {index === 0
                ? 'Today'
                : new Date(item.time).toLocaleString('en', {
                    weekday: 'long'
                  })}
            </span>
            <i
              className={`iconfont ${
                weathercodeToContext(item.weathercode).icon
              }`}
            ></i>
            <span className="temp_text">
              {weathercodeToContext(item.weathercode).w_type}
            </span>
            <span className="temp">
              {item.lowTemp}°C - {item.highTemp}°C
            </span>
          </li>
        ))}
    </ul>
  )
}

export default WeatherList
