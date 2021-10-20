import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos }) => {
   return (
      <div>
         {todos.map((todo, i) => {
            return <TodoItem key={i} title={todo.title} done={todo.done} />
         })}
      </div>
   )
}

export default TodoList
