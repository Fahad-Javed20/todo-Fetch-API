import { useState } from "react";
import type { TodoType } from "../types/TodoType";

interface TodoComponentProps {
  todo: TodoType;
}

const TodoComponent = ({ todo }: TodoComponentProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-2/3 h-20 mx-auto mt-10 p-4 bg-gray-700 rounded-xl shadow">
      <div className="flex items-center justify-between bg-gray-500 px-3 py-2 rounded-lg">
        <span
          className={`font-medium transition-all duration-200 ${
            checked ? "line-through" : ""
          }`}
        >
          {todo.todo}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-400 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoComponent;
