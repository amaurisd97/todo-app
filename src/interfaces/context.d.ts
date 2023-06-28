export interface Action {
  type: 'ADD' | 'DEL'
  payload: string
}
export type State = string[]
