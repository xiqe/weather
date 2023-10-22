import React from 'react'
import './index.less'

interface InputSearchLocalProps {
  searchText: string
  suggestions: any[]
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSuggestionClick: (obj: any) => void
  onLocalClick: () => void
}

const InputSearchLocal: React.FC<InputSearchLocalProps> = ({
  searchText,
  suggestions,
  onInputChange,
  onSuggestionClick,
  onLocalClick
}) => {
  return (
    <div className="input_search-local">
      <input
        type="text"
        placeholder="Please enter city name"
        value={searchText}
        onChange={onInputChange}
      />
      <i className="iconfont icon-search"></i>
      <i className="iconfont icon-local" onClick={() => onLocalClick()}></i>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => onSuggestionClick(item)}>
              {item.name}/{item.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default InputSearchLocal
