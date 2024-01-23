type ActionType = {
    type : string,
    changeNumber : number
}

const initialState = {number : 0}

const reducer = (state : any = initialState, action : ActionType) => {
    if(action.type === 'INCREMENT'){
        return {...state, number : state.number + action.changeNumber}
    }

    return state

}

export default reducer