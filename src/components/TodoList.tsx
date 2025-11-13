import { useEffect, useState } from "react";
import type { TodoType } from "../types/TodoType";
import TodoComonent from "./TodoComonent";


const TodoList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [errors, setErrors] = useState<string>("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      if (!response.ok) {
        throw new Error("Response is not OK");
      }
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error("There is an error in fetching:", error);
      setErrors((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {errors && <p className="text-red-500">{errors}</p>}
      
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoComonent key={todo.id} todo={todo} />
          ))}
        </div>
    </div>
  );
};

export default TodoList;
