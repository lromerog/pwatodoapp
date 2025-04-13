import { Link } from 'react-router-dom'
import { useTodoStore } from '../data/useTodoStore'
import { useState } from 'react'

export default function Overview() {
  const { todos } = useTodoStore()
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterTime, setFilterTime] = useState('all')

  const now = new Date().toISOString()

  const filteredTodos = todos.filter(todo => {
    const matchStatus =
      filterStatus === 'all' ||
      (filterStatus === 'done' && todo.done) ||
      (filterStatus === 'open' && !todo.done)

    const matchTime =
      filterTime === 'all' ||
      (filterTime === 'onTime' && todo.time >= now) ||
      (filterTime === 'pastTime' && todo.time < now)

    return matchStatus && matchTime
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-4 mb-4">
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="border p-2 rounded">
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
        <select value={filterTime} onChange={e => setFilterTime(e.target.value)} className="border p-2 rounded">
          <option value="all">All Times</option>
          <option value="onTime">On Time</option>
          <option value="pastTime">Past Time</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {filteredTodos.length === 0 ? (
          <p className="text-gray-500">No todos match the filters.</p>
        ) : (
          filteredTodos.map(todo => (
            <Link key={todo.id} to={`/todo/${todo.id}`} className="p-4 bg-white shadow rounded hover:bg-blue-50">
              <h2 className="font-semibold">{todo.title}</h2>
              <p className="text-sm">{todo.text}</p>
              <p className="text-xs text-gray-500">Due: {todo.time}</p>
              <p className="text-xs">
                Status: {todo.done ? '✅ Done' : '🕒 Open'} | {todo.time < now ? '⏰ Late' : '🟢 On Time'}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
