import { FC } from 'react'
import DisplayNumber from './DisplayNumber'

interface Props {
    number : number
}

const DisplayNumberRoot : FC<Props> = ({number}) => {

    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber number={number}/>
      </div>
    )
  }

export default DisplayNumberRoot