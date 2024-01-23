import { ChangeEvent, useState } from 'react'
import store from '../store'


const AddNumber = () => {
    const [changeNumber, setChangeNumber] = useState(0)

    const getNumber = (e :ChangeEvent<HTMLInputElement>) => {
      const parsedNumber = Number(e.target.value)

      if(!Number.isNaN(parsedNumber)){
        setChangeNumber(parsedNumber)
      }else {
        setChangeNumber(0)
      }
    }

    return(
      <div>
        <h1>Add Number</h1>
        <input type='button' value='+' onClick={()=>{
          store.dispatch({type : 'INCREMENT', changeNumber : changeNumber})
        }}/>
        <input type='text' 
        data-testid="numb" 
        value={changeNumber} 
        onChange={getNumber}/>
      </div>
    )
  }

export default AddNumber