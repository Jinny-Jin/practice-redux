import { StateType } from './App'

type ActionType = {
    type : string,
    changeNumber : number
}

const initialState = {
    number : 0, 
    inputValue : 0
}

const reducer = (state : StateType = initialState, action : ActionType) => {
    if(action.type === 'INCREMENT'){
        return {...state, number : state.number + action.changeNumber}
    }
    if(action.type === 'INPUT'){
        return {...state, inputValue : action.changeNumber}
    }
    return state

}

export default reducer