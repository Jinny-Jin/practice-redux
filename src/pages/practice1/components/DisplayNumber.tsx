import { useSelector } from 'react-redux'
import { StateType } from '../Practice1'

const DisplayNumber = () => {
    const number = useSelector((state : StateType) => state.counter.number)
  
    return(
      <div>
        <h1>Display Number</h1>
        <input type='text' data-testid="value" value={number} readOnly/>
      </div>
    )
  }
 
export default DisplayNumber