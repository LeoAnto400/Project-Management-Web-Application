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

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} />
    </div>
  )
}
