import { useContext } from 'react'
import Todo from './Todo'
import { Context } from '../../context/Context'

const TodoList = (): JSX.Element => {
  const { todos } = useContext(Context)

  return (
    <div style={{ marginTop: 20 }}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  )
}
export default TodoList
