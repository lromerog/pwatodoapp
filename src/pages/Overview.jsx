import { Link } from 'react-router-dom'
import { useTodoStore } from '../data/useTodoStore'

export default function Overview() {
  const { todos } = useTodoStore()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex flex-col gap-4">
        {todos.map(todo => (
          <Link key={todo.id} to={`/todo/${todo.id}`} className="p-4 bg-white shadow rounded hover:bg-blue-50">
            <h2 className="font-semibold">{todo.title}</h2>
            <p className="text-sm">{todo.text}</p>
            <p className="text-xs text-gray-500">Due: {todo.time}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
