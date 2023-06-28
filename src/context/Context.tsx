import { createContext, useReducer } from 'react'
import reducer from './Reducer'
import type { Action, State } from '../interfaces/context'

const initialState: State = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos') as string) : []

export const Context = createContext({
  todos: initialState,
  dispatch: (_value: Action) => {
    /**/
  }
})

export function ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const value = {
    todos,
    dispatch
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
