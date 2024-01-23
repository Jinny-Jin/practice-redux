const initialState = {
    contents : [
        {id:1, title : '6시 기상', desc:'6시 칼 기상 후 출근 준비'},
        {id:2, title : '생활코딩 강의 수강', desc : '생활코딩 리덕스 강의 수강'},
        {id:3, title : '블로그 작성', desc : '퇴근 후 오늘 일상 글 작성'}
    ],
    mode : 'read',
    selectedId : 1,
}

const reducer = (state : any = initialState, action :any) => {
    switch (action.type) {
        case 'SELECT':
            return(
                {...state, selectedId: action.id, mode: 'read'}
                )
        case 'CHANGE_MODE' :
            return(
                {...state, mode : action.mode}
            )
        case 'CREATE' :
            const newContents = [...state.contents,{
                id : state.contents[state.contents.length-1].id + 1, 
                title : action.title, 
                desc : action.desc
            }]
            return({...state, contents : newContents})

        default:
            return state;
    }
}

export default reducer