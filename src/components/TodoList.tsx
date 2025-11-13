import { useState } from "react"
import TodoComonent from "./TodoComonent"
import type { TodoType } from "../types/TodoType"



const TodoList = () => {


    const [loading,setLoading] = useState<boolean>(false)
    const [todos,setTodos] = useState<TodoType[]>([])
    const [errors,setErrors] = useState<string>("")

    const fetchTodos = async ()=>{
    try{
        setLoading(true);
        const response = await fetch('https://dummyjson.com/todos')
            if(!response.ok){
                throw new Error("Response is Not Okay")
    }
        const data = await response.json()
        setTodos(data.todos)
}
catch(error){
    console.log("There is Error in Fetcging:",error)
    setErrors((error as Error).message)
}
finally{
    setLoading(false)
}



  return (
    <div>
        <TodoComonent/>
    </div>
  )
}

export default TodoList
