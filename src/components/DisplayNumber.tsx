import { useSelector } from 'react-redux'
import { StateType } from '../App'

const DisplayNumber = () => {
    const number = useSelector((state : StateType) => state.number)
  
    return(
      <div>
        <h1>Display Number</h1>
        <input type='text' data-testid="value" value={number} readOnly/>
      </div>
    )
  }
 
export default DisplayNumber