import { useState } from 'react'
import './Form.css'
import plusIcon from './plus.svg'
import trashIcon from './trash.svg'

const Form = ({ addTask, clearCompletedTasks }) => {
   const [title, setTitle] = useState('')

   const addNewTask = () => {
      addTask(title)
      setTitle('')
   }

   return (
      <form>
         <div className="add-section">
            <input type="text"
               placeholder="Add a task here..."
               value={title || ""}
               onChange={(e) => setTitle(e.target.value)}
            />

            <button
               className="add-button"
               type="button"
               onClick={addNewTask}
            >
               <img src={plusIcon} alt="plus icon" />
            </button>
         </div>

         <div>
            <button
               className="delete-button"
               type="button"
               onClick={clearCompletedTasks}
            >
               Clear Completed Tasks
               <img src={trashIcon} alt="trash icon" />
            </button>
         </div>

      </form>
   )
}

export default Form
