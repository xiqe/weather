// Details.js
import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '@/store/index'
import { useNavigate } from 'react-router-dom'
import './index.less'

const Details = () => {
  const { count, increment, decrement } = useStore().counterStore
  const navigateTo = useNavigate()
  const handleGoBack = () => {
    navigateTo('/home')
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
    </div>
  )
}

export default observer(Details)
