import { Dispatch, FC, SetStateAction, useState } from 'react'

interface Props {
  setNumber : Dispatch<SetStateAction<number>>
}

const AddNumber : FC<Props> = ({setNumber}) => {
    const [changeNumber, setChangeNumber] = useState(0)

    return(
      <div>
        <h1>Add Number</h1>
        <input type='button' value='+' onClick={()=>{
          setNumber(prev => (prev + changeNumber))
        }}/>
        <input type='text' value={changeNumber} onChange={(e)=>{
          setChangeNumber(Number(e.target.value))
          }}/>
      </div>
    )
  }

export default AddNumber