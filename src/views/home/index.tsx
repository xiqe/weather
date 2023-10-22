import { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import WeatherList from '@/components/weatherList/index'
import InputSearchLocal from '@/components/inputSearchLocal/index'
// import { decrement, increment } from '@/store/weatherUpdate'
import { weatherApi, loaclApi } from '@/api/index'
import { weathercodeToContext, dailyListFormat } from '@/utils/format'
// import debounce from '@/utils/debounce'
import './index.less'

function Home() {
  //   const count = useSelector((state: any) => state.counter.value)
  //   const dispatch = useDispatch()

  const [curWeather, setCurWeather] = useState<{
    temperature: number
    weathercode: number
  }>({
    temperature: 0,
    weathercode: 1
  })

  const [dailyList, setDailyList] = useState<any[]>([])
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [localText, setLocalText] = useState('')

  const getlocal = () => {
    setSearchText('')
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos: any) => {
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

  const getWeatherData = (lat: any, long: any) => {
    weatherApi(lat, long).then((res: any) => {
      const { status, data } = res
      if (status == 200) {
        setCurWeather(data.current_weather)
        setDailyList(dailyListFormat(data.daily))
      }
    })
  }

  const getlocalData = (keyword: string) => {
    loaclApi(keyword).then((res: any) => {
      const { status, data } = res
      if (status == 200) {
        data.results ? setSuggestions(data.results) : setSuggestions([])
      }
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSearchText(inputValue)
    inputValue.length > 2 ? getlocalData(inputValue) : setSuggestions([])
  }

  const handleSuggestionClick = (obj: any) => {
    setSearchText(obj.name)
    setLocalText(`${obj.name},${obj.country}`)
    setSuggestions([])
    getWeatherData(obj.latitude, obj.longitude)
  }

  return (
    <div className="app_wrapper-home">
      <InputSearchLocal
        searchText={searchText}
        suggestions={suggestions}
        onInputChange={handleInputChange}
        onSuggestionClick={handleSuggestionClick}
        onLocalClick={getlocal}
      />

      <div className="weather_info">
        <div className="local">{localText}</div>

        <div className="cur_temp">
          <div className="col">{curWeather.temperature}°C</div>
          <div className="col cur_temp-type">
            <i
              className={`iconfont ${
                weathercodeToContext(curWeather.weathercode).icon
              }`}
            ></i>
          </div>
        </div>
        <div className="cur_temp-text">
          {weathercodeToContext(curWeather.weathercode).w_type}
        </div>
      </div>

      <WeatherList dailyList={dailyList} />

      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}
    </div>
  )
}

export default Home
