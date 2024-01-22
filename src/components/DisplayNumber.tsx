import { FC } from 'react'

interface Props {
  number : number
}

const DisplayNumber : FC<Props> = ({number}) => {

    return(
      <div>
        <h1>Display Number</h1>
        <input type='text' value={number} readOnly/>
      </div>
    )
  }
 
export default DisplayNumber