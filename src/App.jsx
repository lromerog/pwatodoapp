import { Routes, Route, Link } from 'react-router-dom'
import Overview from './pages/Overview'
import CreateTodo from './pages/CreateTodo'
import TodoDetail from './pages/TodoDetail'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav className="flex gap-4">
          <Link to="/">Overview</Link>
          <Link to="/create">Create</Link>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </main>
    </div>
  )
}
