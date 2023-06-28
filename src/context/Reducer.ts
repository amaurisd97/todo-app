import type { Action, State } from '../interfaces/context'

export default function reducer(state: State, action: Action): string[] {
  switch (action.type) {
    case 'ADD':
      localStorage.setItem('todos', JSON.stringify([...state, action.payload]))
      return [...state, action.payload]
    case 'DEL':
      localStorage.setItem('todos', JSON.stringify(state.filter((todo) => todo !== action.payload)))
      return state.filter((todo) => todo !== action.payload)
    default:
      return state
  }
}
