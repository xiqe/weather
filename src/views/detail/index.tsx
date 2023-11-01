// Details.js
import { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '@/store/index'
import { useNavigate } from 'react-router-dom'
import './index.less'

const Details = () => {
  const { count, increment, decrement } = useStore().counterStore
  const { list, insertTodoList } = useStore().todoListStore
  const navigateTo = useNavigate()
  const handleGoBack = () => {
    navigateTo('/home')
  }
  const [inputValue, setInputValue] = useState<string>('')
  const addList = (e: any) => {
    if (e.code == 'Enter') {
      insertTodoList({ key: list.length + 1, title: inputValue })
      setInputValue('')
    }
  }

  return (
    <div className="app_wrapper-detail">
      <span className="btn-back" onClick={handleGoBack}>
        ×
      </span>
      <h1>Mobx Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button onClick={decrement}>Decrement</button>
      <h2>Todo</h2>
      <ul>
        {list.map((x) => {
          return (
            <li key={x.key}>
              {x.key}-{x.title}
            </li>
          )
        })}
      </ul>
      <div>
        <input
          type="text"
          className="inputDemo"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={(e) => addList(e)}
        />
      </div>
    </div>
  )
}

export default observer(Details)
