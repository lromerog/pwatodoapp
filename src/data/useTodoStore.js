import { create } from 'zustand'
import { nanoid } from 'nanoid'

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: ({ title, text, time }) =>
    set(state => ({
      todos: [...state.todos, {
        id: nanoid(),
        title,
        text,
        time,
        done: false,
      }]
    }))
}))
