import { useSelector } from 'react-redux'

const DisplayNumber = () => {
    const number = useSelector((state : any) => state.number)
  
    return(
      <div>
        <h1>Display Number</h1>
        <input type='text' data-testid="value" value={number} readOnly/>
      </div>
    )
  }
 
export default DisplayNumber