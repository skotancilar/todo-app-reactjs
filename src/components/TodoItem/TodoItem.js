import classNames from 'classnames'
import './TodoItem.css'

const TodoItem = ({ title, done, onComplete, id }) => {

   return (
      <div onClick={() => onComplete(id)} className={classNames({
         done: done
      }, 'default')}>
         {title}
      </div >
   )
}

export default TodoItem
