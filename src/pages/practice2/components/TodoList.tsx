import TodoContent from './TodoContent'

const TodoList = () => {
    return (
        <>
            <ol>
            <li>
                <input
                type='checkbox'
                id='todo1'
                />
                <label htmlFor='todo1'>6시 기상</label>
            </li>
            <li>
                <input
                type='checkbox'
                id='todo2'
                />
                <label htmlFor='todo2'>생활코딩 강의 수강</label>
            </li>
            <li>
                <input
                type='checkbox'
                id='todo3'
                />
                <label htmlFor='todo3'>리액트 블로그 정리</label>
            </li>
        </ol>
        <div>
            <button>create</button>
            <button>delete</button>
        </div>
        <TodoContent/>
    </>
    )
}

export default TodoList