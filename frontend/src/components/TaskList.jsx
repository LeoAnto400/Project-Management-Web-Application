import { deleteTask, toggleTask } from "../api/tasks"

export default function TaskList({ tasks, onDelete, onToggle }) {
  async function handleDelete(id) {
    await deleteTask(id)
    onDelete(id)
  }

  async function handleToggle(id) {
    const updated = await toggleTask(id)
    onToggle(updated)
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <strong
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </strong>
          <button onClick={() => handleDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  )
}

