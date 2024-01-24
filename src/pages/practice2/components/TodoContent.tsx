import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType2, TodoItem } from '../Practice2'

type InputValue = Omit<TodoItem, 'id'>

const TodoContent = () => {
    const dispatch = useDispatch()
    const content = useSelector((state : StateType2) => state.contents)
    const mode = useSelector((state : StateType2) => state.mode)
    const selectedId = useSelector((state: StateType2)=> state.selectedId)
    const [inputValue, setInputValue] = useState<InputValue>({
        title : '',
        desc : ''
    })

    return(
        <div className='container'>
            {mode === 'read' && 
            content.map((item) =>
                item.id === selectedId && (
                    <article key={item.id}>
                        <h3 data-testid='title'>{item.title}</h3>
                        <div data-testid='description'>{item.desc}</div>
                    </article>
                )
            )
            }
            {mode === 'create' && (
                <>
                    <div>
                        <label>Title</label>
                        <input type='text' data-testid='titleInput' onChange={(e)=>{
                            setInputValue({...inputValue, title : e.target.value})
                        }}/>
                    </div>
                    <div className='content'>
                        <label>Detail</label>
                        <textarea data-testid='descInput' onChange={(e)=>{
                            setInputValue({...inputValue, desc : e.target.value})
                        }}/>
                    </div>
                    <button onClick={()=>{
                        dispatch({type : 'CREATE', title : inputValue.title, desc : inputValue.desc})
                    }}>생성</button>
                </>
            
            )}
        </div>
    )
}

export default TodoContent