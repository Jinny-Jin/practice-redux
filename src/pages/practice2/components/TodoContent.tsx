import { useDispatch, useSelector } from 'react-redux'

const TodoContent = () => {
    const dispatch = useDispatch()
    const content = useSelector((state : any) => state.contents)
    const mode = useSelector((state : any) => state.mode)
    const selectedId = useSelector((state: any)=> state.selectedId)

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
                        <input type='text' id='title'/>
                    </div>
                    <div className='content'>
                        <label htmlFor='content'>Detail</label>
                        <textarea id='content'/>
                    </div>
                    <button>생성</button>
                </>
            
            )}
        </div>
    )
}

export default TodoContent