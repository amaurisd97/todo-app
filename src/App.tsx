import styles from './App.module.css'
import Header from './components/Header'
import AddTodo from './components/Todos/AddTodo'
import TodoList from './components/Todos/TodoList'
import { ContextProvider } from './context/Context'

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.main_container}>
        <Header />
        <main>
          <ContextProvider>
            <AddTodo />
            <TodoList />
          </ContextProvider>
        </main>
      </div>
    </div>
  )
}

export default App
