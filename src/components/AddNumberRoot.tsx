import { Dispatch, FC, SetStateAction } from 'react'
import AddNumber from './AddNumber'

interface Props {
  setNumber : Dispatch<SetStateAction<number>>
}

const AddNumberRoot :FC<Props> = ({setNumber}) => {
    return(
      <div>
        <h1>Add Number Root</h1>
        <AddNumber setNumber={setNumber} />
      </div>
    )
  }
  
  export default AddNumberRoot