export const Todo = (props) => {
  return (
    <div className="w-full flex justify-between items-center p-3 mb-4 space-x-2 mt-4  hover:border-pink-400 hover:border-b-2">
      <div className="">
        <h1>{props.todo.title}</h1>
        <h1>{props.todo.body}</h1>
      </div>
      <div className="flex md:w-3/7 space-x-2 justify-between items-center">
        <button className="bg-blue-700 text-white px-2 py-1 rounded-sm">
          Edit
        </button>
        <button className="bg-red-500 px-2 text-white rounded-sm py-1 ">
          Delete
        </button>
        <button className="bg-green-500  px-2 text-white rounded-sm py-1 ">
          Complete
        </button>
      </div>
    </div>
  );
};
