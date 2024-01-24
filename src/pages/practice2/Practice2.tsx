import { Provider } from 'react-redux'
import store from './store'
import './Practice2.css'
import TodoList from './components/TodoList'

export interface TodoItem {
    id : number,
    title : string,
    desc : string
}

export interface StateType2 {
    contents : TodoItem[],
    mode : string,
    selectedId : number,
    finalId : number
}

const Todo = () => {
    return(
        <Provider store={store}>
            <header>
                <h1>What's on Today</h1>
            </header>
            <TodoList />
        </Provider>
        )
}

export default Todo