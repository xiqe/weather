import { useEffect, useState } from 'react'
import WeatherList from '@/components/weatherList/index'
import InputSearchLocal from '@/components/inputSearchLocal/index'
import { weatherApi } from '@/api/index'
import { weathercodeToContext, dailyListFormat } from '@/utils/format'
import { observer } from 'mobx-react'
import { useStore } from '@/store/index'
import './index.less'
interface IWeather {
  temperature: number
  weathercode: number
}

const Home: React.FC = () => {
  const { count } = useStore().counterStore
  const { list } = useStore().todoListStore
  const [curWeather, setCurWeather] = useState<IWeather>({
    temperature: 0,
    weathercode: 1
  })
  const [dailyList, setDailyList] = useState<any[]>([])
  const [localText, setLocalText] = useState<string>('')

  const getWeatherData = async (lat: number, long: number): Promise<void> => {
    try {
      const res = await weatherApi(lat, long)
      const { status, data } = res
      if (status === 200) {
        setCurWeather(data.current_weather)
        setDailyList(dailyListFormat(data.daily))
      }
    } catch (error) {
      alert(`获取天气数据失败: ${(error as Error).message}`)
    }
  }

  const getlocal = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          getWeatherData(pos.coords.latitude, pos.coords.longitude)
          setLocalText('我的位置')
        },
        (error) => {
          alert(`获取位置失败: ${error.message}`)
        }
      )
    } else {
      alert('浏览器不支持Geolocation API')
    }
  }

  useEffect(() => {
    getlocal()
  }, [])

  const handSuggestionClick = (
    keyword: string,
    lat: number,
    long: number
  ): void => {
    setLocalText(keyword)
    getWeatherData(lat, long)
  }

  const currentWeatherContext = weathercodeToContext(curWeather.weathercode)
  const { icon, w_type } = currentWeatherContext || {}

  return (
    <div className="app_wrapper-home">
      <InputSearchLocal
        onSuggestionClick={handSuggestionClick}
        onLocalClick={getlocal}
      />
      <div className="weather_info">
        <div className="local">{localText}</div>

        <div className="cur_temp">
          <div className="col">{curWeather.temperature}°C</div>
          <div className="col cur_temp-type">
            {icon && <i className={`iconfont ${icon}`}></i>}
          </div>
        </div>
        <div className="cur_temp-text">{w_type}</div>
      </div>
      <WeatherList dailyList={dailyList} />
      {/* <h2>count:{count}</h2>
      <ul>
        {list.map((x) => {
          return (
            <li key={x.key}>
              {x.key}-{x.title}
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default observer(Home)
