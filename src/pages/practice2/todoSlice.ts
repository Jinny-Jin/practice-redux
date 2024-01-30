import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        contents : [
            {id:1, title : '6시 기상', desc:'6시 칼 기상 후 출근 준비'},
            {id:2, title : '생활코딩 강의 수강', desc : '생활코딩 리덕스 강의 수강'},
            {id:3, title : '블로그 작성', desc : '퇴근 후 오늘 일상 글 작성'}    
        ],
        mode : 'read',
        selectedId : 1,
        finalId : 3
    },
    reducers : {
        select : (state, action) => {
            state.selectedId = action.payload;
            state.mode = 'read'  
        },
        create_mode : (state) => {
            state.mode = 'create'
        },
        create : (state, action) => {
            const {title, desc} = action.payload

            const newContents =  {
                id : state.finalId + 1,
                title : title,
                desc : desc
            }
            state.contents.push(newContents)
            state.mode = 'read'
        },
        remove : (state) => {
            const deletedContents = state.contents.filter(item => item.id !== state.selectedId)
            state.contents = deletedContents
        }
    }  
})

export default todoSlice

export const {select, create_mode, remove , create} = todoSlice.actions