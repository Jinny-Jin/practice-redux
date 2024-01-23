import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddNumber = () => {
    const dispatch = useDispatch()
    const inputNumber = useSelector((state : any) => state.inputValue)

    const getNumber = (e :ChangeEvent<HTMLInputElement>) => {
      const parsedNumber = Number(e.target.value)

      if(!Number.isNaN(parsedNumber)){
        dispatch({type : 'INPUT', changeNumber : parsedNumber})
      }else {
        dispatch({type : 'INPUT', changeNumber : 0})
      }
    }

    const clickButton = () => {
      dispatch({type : 'INCREMENT', changeNumber : inputNumber})
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