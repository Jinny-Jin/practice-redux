import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoContent = () => {
    const dispatch = useDispatch()
    const content = useSelector((state : any) => state.contents)
    const mode = useSelector((state : any) => state.mode)
    const selectedId = useSelector((state: any)=> state.selectedId)
    const [inputValue, setInputValue] = useState<any>({
        title : '',
        desc : ''
    })

    return(
        <div className='container'>
            {mode === 'read' && 
            content.map((item : any) =>
                item.id === selectedId && (
                    <>
                        <h2>{item.title}</h2>
                        <div>{item.desc}</div>
                    </>
                )
            )
            }
            {mode === 'create' && (
                <>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={(e)=>{
                            setInputValue({...inputValue, title : e.target.value})
                        }}/>
                    </div>
                    <div className='content'>
                        <label htmlFor='desc'>Detail</label>
                        <textarea id='desc' onChange={(e)=>{
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