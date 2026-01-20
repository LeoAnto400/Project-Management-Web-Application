import { useEffect, useState } from "react"
import { getTasks } from "./api/tasks"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks().then(setTasks)
  }, [])

  function handleTaskCreated(task) {
    setTasks((prev) => [...prev, task])
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  function handleToggle(updated) {
    setTasks((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    )
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList 
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle} />
    </div>
  )
}
