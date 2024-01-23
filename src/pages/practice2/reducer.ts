
const initialState = {
    contents : [
        {id:1, title : '6시 기상', desc:'6시 칼 기상 후 출근 준비'},
        {id:2, title : '생활코딩 강의 수강', desc : '생활코딩 리덕스 강의 수강'},
        {id:3, title : '블로그 작성', desc : '퇴근 후 오늘 일상 글 작성'}
    ],
    mode : 'read',
    selectedId : 3
}

const reducer = (state : any = initialState, action :any) => {
    let newState
    switch (action.type) {
        case 'SELECT':
            return(
                newState = Object.assign({},state,{selectedId: action.id, mode: 'read'})
            )
        case 'CHANGE_MODE' :
            return(
                newState = Object.assign({},state,{mode : action.mode})
            )

        default:
            return state;
    }
}

export default reducer