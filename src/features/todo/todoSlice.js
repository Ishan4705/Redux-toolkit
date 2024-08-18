import { createSlice, nanoid } from '@reduxjs/toolkit'

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
        addTodo: (state,action)=>{ //1st reducer
            const newTodo= {
                id:nanoid(),
                task: action.payload,
                isDone:false,
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state,action)=>{ //2nd reducer
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        },
        marksAsDone:(state,action)=>{ //3rd reducer
            state.todos=state.todos.map((todo)=>{
                if(todos.id === action.payload){
                    todo.isDone= true;
                }
            });
        },
    },
});

export const{addTodo,deleteTodo,marksAsDone}=todoSlice.actions;
export default todoSlice.reducers;