import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{id: "", value:"", isComplete:false}],
    addTodo: (newTodo)=>{},
    deleteTodo: (id)=>{},
    editTodo: (id, todo)=>{},
    toggleComplete: (id)=>{},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}