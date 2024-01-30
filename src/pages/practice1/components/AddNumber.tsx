import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../Practice1'
import { increment, input } from '../counterSlice'

const AddNumber = () => {
    const dispatch = useDispatch()
    const inputNumber = useSelector((state : StateType) => state.counter.inputValue)

    const getNumber = (e :ChangeEvent<HTMLInputElement>) => {
      const parsedNumber = Number(e.target.value)

      if(!Number.isNaN(parsedNumber)){
        dispatch(input(parsedNumber))
      }else {
        dispatch(input(0))
      }
    }

    const clickButton = () => {
      dispatch(increment(inputNumber))
    }

    return(
      <div>
        <h1>Add Number</h1>
        <input type='button' value='+' onClick={clickButton}/>
        <input type='text' 
        data-testid="numb" 
        value={inputNumber} 
        onChange={getNumber}/>
      </div>
    )
  }

export default AddNumber