import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'

interface Props {
  setNumber : Dispatch<SetStateAction<number>>
}

const AddNumber : FC<Props> = ({setNumber}) => {
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
          setNumber(prev => (prev + changeNumber))
        }}/>
        <input type='text' 
        data-testid="numb" 
        value={changeNumber} 
        onChange={getNumber}/>
      </div>
    )
  }

export default AddNumber