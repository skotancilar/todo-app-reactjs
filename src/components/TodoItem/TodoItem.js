import classNames from 'classnames'
import './styles.css'

const TodoItem = ({ title, done, onComplete, id }) => {

   const toggleTask = () => {
      onComplete(id)
   }
   return (
      <div>
         <p onClick={toggleTask}
            className={classNames({
               done: done
            }, 'default')}
         >{title}</p>
      </div >
   )
}

export default TodoItem
