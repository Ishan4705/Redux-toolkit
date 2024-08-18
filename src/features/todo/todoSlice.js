import { createSlice } from '@reduxjs/toolkit'

const initialState={
    todos: [{
        id:"abc",
        task:"demo-task",
        isDone: false
    }],
};

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{  // basically called object of functions
        // each reducer has 2 varibles one is state and the other is action
        addTodo: (state,action)=>{
            const newTodo= {
                id:123,
                task: action.payload,
                isDone:false,
            }
        }

    }
})