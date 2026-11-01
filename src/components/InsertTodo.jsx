// Q6. Todo List Application
// Create a simple Todo List application where users can:
// - Add a new task.
// - Display all tasks.
// - Mark a task as completed.
// - Delete a task.
// Use components, props, event handlers, and `useState`.

const InsertTodo = ({task, setTask, handleInsert}) => {
  return (
    <div className="flex gap-2">
        <input type="text" placeholder="e.g. Go for fishing" onChange={(e) => setTask(e.target.value)} value={task} className="w-full border px-3 py-2 rounded"/>
        <button onClick={() => {
            handleInsert(task);
            setTask("")
        } } className="px-3 py-2 rounded bg-green-600 font-semibold text-white">Go</button>
    </div>
  )
}

export default InsertTodo