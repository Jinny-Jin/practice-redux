import TodoContent from './TodoContent'
import { useDispatch, useSelector } from 'react-redux'


const TodoList = () => {
    const dispatch = useDispatch()
    const content = useSelector((state : any) => state.contents)

    return (
        <>
            <ol>
                {content.map((item : any) => {
                    return(
                        <li key={item.id}>
                            <label onClick={()=>{
                                dispatch({type : 'SELECT', id : item.id})
                            }}>{item.title}</label>
                            <input type='checkbox' id={item.id}/>
                        </li>
                    )
                })}
            </ol>
            <div>
                <button onClick={()=>{
                    dispatch({type : 'CHANGE_MODE', mode : 'create'})
                }}>create</button>
                <button onClick={()=>{
                    dispatch({type : 'DELETE'})
                }}>delete</button>
            </div>
        <TodoContent/>
    </>
    )
}

export default TodoList