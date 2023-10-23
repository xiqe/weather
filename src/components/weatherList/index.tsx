import { weathercodeToContext } from '@/utils/format'
import './index.less'
interface Props {
  dailyList: Array<any>
}

const WeatherList: React.FC<Props> = ({dailyList}) => {
  return (
    <ul className="weather_week__list">
      <li className="tit">Recently 7days</li>
      {dailyList.length > 0 &&
        dailyList.map((item, index) => {
          const { time, weathercode, lowTemp, highTemp } = item

          const isToday = index === 0
          const dateText = isToday
            ? 'Today'
            : new Date(time).toLocaleString('en', { weekday: 'long' })
          const { icon, w_type } = weathercodeToContext(weathercode)

          return (
            <li key={time}>
              <span className="date">{dateText}</span>
              <i className={`iconfont ${icon}`}></i>
              <span className="temp_text">{w_type}</span>
              <span className="temp">{`${lowTemp}°C - ${highTemp}°C`}</span>
            </li>
          )
        })}
    </ul>
  )
}

export default WeatherList
