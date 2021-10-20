import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, onComplete }) => {

   return (
      <div>
         {todos?.map((todo, i) => {
            return <TodoItem onComplete={onComplete} key={i} title={todo.title} done={todo.done} id={i} />
         })}
      </div>
   )
}

export default TodoList
