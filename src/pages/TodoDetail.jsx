import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTodoStore } from '../data/useTodoStore'

export default function TodoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { todos, toggleTodoDone, removeTodo } = useTodoStore()
  const todo = todos.find(t => t.id === id)

  if (!todo) return <p>Todo not found</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{todo.title}</h1>
      <p className="mb-2">{todo.text}</p>
      <p className="text-sm text-gray-500 mb-2">Due: {todo.time}</p>
      <p className="text-sm mb-4">Status: {todo.done ? '✅ Done' : '🕒 Open'}</p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => toggleTodoDone(todo.id)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {todo.done ? 'Mark as Open' : 'Mark as Done'}
        </button>
        <button
          onClick={() => {
            removeTodo(todo.id)
            navigate('/')
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>

      <Link to="/" className="text-blue-600 underline">
        ← Back to List
      </Link>
    </div>
  )
}
