import { useContext } from 'react'
import { Context } from '../../context/Context'
import styles from './Todos.module.css'
interface Props {
  todo: string
}

const Todo = ({ todo }: Props): JSX.Element => {
  const { dispatch } = useContext(Context)
  return (
    <>
      <li style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '300px' }}>
        <p style={{ maxWidth: 200 }}>{todo}</p>
        <button className={styles.btn} style={{ width: 25, height: 25 }} onClick={() => dispatch({ type: 'DEL', payload: todo })}>
          x
        </button>
      </li>
      <hr />
    </>
  )
}
export default Todo
