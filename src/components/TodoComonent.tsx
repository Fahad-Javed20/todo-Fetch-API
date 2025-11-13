const TodoComonent = () => {
  return (
    <div className="w-2/3 h-20 mx-auto mt-10 p-4 bg-white rounded-xl shadow">
      <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
        <span className="font-medium">Task 1</span>
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default TodoComonent;

{
  /* <h1 className="text-xl font-semibold text-center mb-4">Todo Tasks</h1> */
}
