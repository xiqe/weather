import { createContext, useContext } from 'react'
import counterStore from './modules/counter'
import todoListStore from './modules/todolist'

const context = createContext({ counterStore, todoListStore })
const useStore = () => useContext(context)

export { useStore }
