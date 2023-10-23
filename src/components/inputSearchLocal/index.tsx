import React, { useState } from 'react'
import { loaclApi } from '@/api/index'
import useDebounce from '@/utils/debounce'
import './index.less'

interface InputSearchLocalProps {
  onSuggestionClick: (keyword: string, lat: number, long: number) => void
  onLocalClick: () => void
}

const InputSearchLocal: React.FC<InputSearchLocalProps> = ({
  onSuggestionClick,
  onLocalClick
}) => {
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState<any[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSearchText(inputValue)
    inputValue.length > 2 ? debouncedFunction(inputValue) : setSuggestions([])
  }

  const getlocalData = async (keyword: string) => {
    try {
      const res = await loaclApi(keyword)
      const { status, data } = res
      if (status == 200) {
        data.results ? setSuggestions(data.results) : setSuggestions([])
      }
    } catch (error: any) {
      alert(`获取城市数据失败: ${error.message}`)
    }
  }

  const debouncedFunction = useDebounce(getlocalData, 300)

  const handleSuggestionClick = (obj: any) => {
    setSearchText(obj.name)
    setSuggestions([])
    onSuggestionClick(`${obj.name},${obj.country}`, obj.latitude, obj.longitude)
  }

  const handleLocalClick = () => {
    setSearchText('')
    onLocalClick()
  }

  return (
    <div className="input_search-local">
      <input
        type="text"
        placeholder="Please enter city name"
        value={searchText}
        onChange={handleInputChange}
      />
      <i className="iconfont icon-search"></i>
      <i className="iconfont icon-local" onClick={() => handleLocalClick()}></i>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleSuggestionClick(item)}>
              {item.name}/{item.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default InputSearchLocal
