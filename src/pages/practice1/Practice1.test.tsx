import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Practice1';

// 테스트 해야 할 것

// 1. 화면에 모든 구성 요소들이 잘 나오고 있는가
// 2. 숫자 입력이 정상적으로 동작하는 가
// 3. + 버튼을 여러 번 누르면 누적으로 더해지는 가
// 4. 숫자 이외의 값을 입력했을 때 정상적으로 처리가 되는가 


const renderApp = () => {
  render(
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
  const numberInput = screen.getByTestId("numb")
  const plusButton = screen.getByRole("button")
  const displayInput = screen.getByTestId("value")

  return {numberInput, plusButton, displayInput}
}

describe("Test App", () => {
  test("화면에 요소들이 제대로 렌더링 되야 함",()=>{
    //arrange
    const {numberInput, plusButton, displayInput} = renderApp()

    //assert
    expect(numberInput).toBeInTheDocument()
    expect(plusButton).toBeInTheDocument()
    expect(displayInput).toBeInTheDocument()

  })
  test("숫자를 입력하고 + 버튼을 눌렀을 때, 정확한 결과가 출력되야 함",()=>{
    //arrange
    const {numberInput, plusButton, displayInput} = renderApp()

    //act
    fireEvent.change(numberInput, {target : {value : '5'}})
    fireEvent.click(plusButton)

    //assert
    expect(displayInput).toHaveValue('5')
  })
  test("+ 버튼을 여러 번 누르면 값이 누적으로 더해져야 함",()=>{
    //arrange
    const {numberInput, plusButton, displayInput} = renderApp()

    //act
    fireEvent.change(numberInput, {target : {value : '10'}})
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)

    //assert
    expect(displayInput).toHaveValue('30')

  })
  test("숫자 이외의 값을 입력했을 땐 더해지지 않아야 함",()=>{
    //arrange
    const {numberInput} = renderApp()

    //act
    fireEvent.change(numberInput, {target : {value : 'abc'}})

    //assert
    expect(numberInput).toHaveValue('0')

  })
})