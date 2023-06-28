import { useContext, useState } from 'react'
import { Context } from '../context/Context'
import type { ReturnValues } from '../interfaces/useHandlers'

const useHandlers = (): ReturnValues => {
  const { dispatch } = useContext(Context)
  const [input, setInput] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(evt.target.value)
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    if (input.length > 0) {
      dispatch({ type: 'ADD', payload: input })
    }
    setInput('')
  }
  return { handleChange, handleSubmit, input }
}
export default useHandlers
