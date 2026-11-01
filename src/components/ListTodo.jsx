// Q6. Todo List Application
// Create a simple Todo List application where users can:
// - Add a new task.
// - Display all tasks.
// - Mark a task as completed.
// - Delete a task.
// Use components, props, event handlers, and `useState`.

const ListTodo = ({data, handleDelete, handleDoneToggle}) => {
  return (
    <ul className="flex flex-col py-5 max-h-[520px] overflow-y-auto">
        {
            data.map((item, index) =>(
                <li className="py-2 flex justify-between text-white border-b" key={index}>
                    <span>{item.id}. {item.isDone ?<del>{item.task}</del> : item.task}</span>
                    <span className="flex gap-2">
                        {item.isDone ? <button onClick={() => handleDoneToggle(item.id)} className="px-3 py-2 text-sm bg-orange-500 font-semibold text-white rounded">UnDone</button>
                        : <button onClick={() => handleDoneToggle(item.id)} className="px-3 py-2 text-sm bg-green-500 font-semibold text-white rounded">Done</button> }
                        <button onClick={() => {
                            handleDelete(item.id);
                        }} className="px-3 py-2 text-sm bg-red-500 font-semibold text-white rounded">X</button>
                    </span>
                </li>
            ))
        }
    </ul>
  )
}

export default ListTodo