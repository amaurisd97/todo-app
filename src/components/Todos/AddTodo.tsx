import useHandlers from '../../hooks/useHandlers'
import styles from './Todos.module.css'

const AddTodo = (): JSX.Element => {
  const { handleChange, handleSubmit, input } = useHandlers()
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
      <div style={{ width: 300, position: 'relative' }}>
        <input
          onChange={handleChange}
          className={styles.input}
          type='text'
          value={input}
          placeholder='Pending movies, read a novel, ...'
          style={{ width: 285 }}
        />
        <span className={styles.span}></span>
        <button className={styles.submit} type='submit'>
          <i>
            <b>New</b>
          </i>
        </button>
      </div>
    </form>
  )
}
export default AddTodo
