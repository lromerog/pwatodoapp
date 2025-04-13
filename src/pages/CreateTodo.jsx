import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTodoStore } from '../data/useTodoStore'

export default function CreateTodo() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const { addTodo } = useTodoStore()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo({ title, text, time })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Create Todo</h1>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
      <textarea placeholder="Text" value={text} onChange={e => setText(e.target.value)} className="w-full p-2 border rounded" required />
      <input type="datetime-local" value={time} onChange={e => setTime(e.target.value)} className="w-full p-2 border rounded" required />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
    </form>
  )
}
