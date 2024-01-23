import {useState} from 'react'

const TodoContent = () => {
    const [mode, setMode] = useState('create')

    return(
        <div className='container'>
            {mode === 'read' && (
                <>
                <h2>6시 기상</h2>
                <div>우히히 6시에 안일어나도 몰라~~</div>
                </>
            )}
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