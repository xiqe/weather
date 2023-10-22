import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/weatherUpdate'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
