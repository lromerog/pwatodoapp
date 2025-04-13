import { useParams, useNavigate } from 'react-router-dom'
import { useTodoStore } from '../data/useTodoStore'

export default function TodoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { todos } = useTodoStore()
  const todo = todos.find(t => t.id === id)

  if (!todo) return <p>Todo not found</p>

  return (
    <div className="max-w-md mx-auto bg-white shadow p-4 rounded">
      <h1 className="text-xl font-bold">{todo.title}</h1>
      <p>{todo.text}</p>
      <p className="text-sm text-gray-500">Due: {todo.time}</p>
      <p className="text-sm font-semibold mt-2">Status: {todo.done ? '✅ Done' : '🕒 Pending'}</p>
      <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 underline">← Back</button>
    </div>
  )
}
