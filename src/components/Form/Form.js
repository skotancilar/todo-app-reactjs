import { useState } from 'react'

const Form = ({ addTask, clearCompletedTasks }) => {
   const [title, setTitle] = useState('')

   const addNewTask = () => {
      addTask(title)
      setTitle('')
   }

   return (
      <div>
         <form>
            <button type="button" onClick={addNewTask}>Add</button>
            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
            <button type="button" onClick={clearCompletedTasks}>Clear Completed Tasks</button>
         </form>

      </div >
   )
}

export default Form
