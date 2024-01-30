import { StateType2 } from '../Practice2'
import { create_mode, remove, select } from '../todoSlice'
import TodoContent from './TodoContent'
import { useDispatch, useSelector } from 'react-redux'


const TodoList = () => {
    const dispatch = useDispatch()
    const content = useSelector((state : StateType2) => state.todo.contents)

    return (
        <>
            <ol>
                {content.map((item) => {
                    return(
                        <li key={item.id} 
                        data-testid = {item.id}
                        onClick={()=>{
                            dispatch(select(item.id))
                        }}>
                            <label>{item.title}</label>
                            <input type='checkbox'/>
                        </li>
                    )
                })}
            </ol>
            <div>
                <button onClick={()=>{
                    dispatch(create_mode())
                }}>create</button>
                <button onClick={()=>{
                    dispatch(remove())
                }}>delete</button>
            </div>
        <TodoContent/>
    </>
    )
}

export default TodoList