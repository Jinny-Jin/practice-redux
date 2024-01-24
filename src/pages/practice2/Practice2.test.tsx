import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux';
import store from './store';
import Todo from './Practice2';

//테스트 해야 할 것

//1. 화면에 모든 구성 요소들이 잘 나오고 있는가
//2. read 모드와 create 모드가 정상적으로 바뀌는가
//3. create 모드일 때, 생성 버튼을 누르면 상단에 생성한 아이템의 제목이 보이는 가
//4. 리스트 중 1개를 선택하고 삭제 버튼을 눌렀을 때 정상적으로 삭제가 되는 가

const renderApp = () => {
    render(
        <Provider store={store}>
            <Todo/>
        </Provider>
    ) 

    const getListItem = (id : number) => screen.getByTestId(id)
    const createModeButton = screen.getByText(/create/i)
    const deleteButton = screen.getByText(/delete/i)

    return {getListItem, createModeButton, deleteButton}
}

describe("Test Todo", () => {
    test("화면에 모든 요소들이 제대로 렌더링 되어야 함",()=>{
        //arrange
        const {getListItem, createModeButton, deleteButton} = renderApp()

        //assert
        expect(getListItem(1)).toBeInTheDocument()
        expect(getListItem(2)).toBeInTheDocument()
        expect(getListItem(3)).toBeInTheDocument()
        expect(createModeButton).toBeInTheDocument()
        expect(deleteButton).toBeInTheDocument()
        expect(screen.getByTestId('title')).toBeInTheDocument()
        expect(screen.getByTestId('description')).toBeInTheDocument()

    })
    test("create 모드로 바뀔 때 하단의 요소가 정상적으로 바뀌어야 함",()=>{
        //arrange
        const {createModeButton} = renderApp()    

        //act
        fireEvent.click(createModeButton)

        //assert
        expect(screen.getByTestId('titleInput')).toBeInTheDocument()
        expect(screen.getByTestId('descInput')).toBeInTheDocument()
        expect(screen.getByText(/생성/i)).toBeInTheDocument()
    })
    test("생성 버튼을 누르면 게시물이 정상적으로 생성되어야 함",()=>{
        //arrange
        const {createModeButton, getListItem} = renderApp()

        //act
        fireEvent.click(createModeButton)
        fireEvent.change(screen.getByTestId('titleInput'), {target : {value : 'Hello'}})
        fireEvent.change(screen.getByTestId('descInput'), {target : {value : 'World!!'}})
        fireEvent.click(screen.getByText(/생성/i))

        //assert
        expect(getListItem(4)).toBeInTheDocument()

    })
    test("리스트 중 1개를 선택하고 삭제 버튼을 누르면 게시글이 삭제되어야 함",()=>{
        //arrange
        const {getListItem, deleteButton} = renderApp()
    
        //act
        fireEvent.click(getListItem(3))
        fireEvent.click(deleteButton)
    
        //assert
        expect(screen.queryByTestId(3)).toBeNull()

        })    

})