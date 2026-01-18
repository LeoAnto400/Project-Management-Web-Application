import { useState } from "react"
import { createTask } from "../api/tasks.js"

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const task = await createTask({ title, description })
    onTaskCreated(task)
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  )
}
