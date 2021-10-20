import React from 'react'
import classNames from 'classnames'
import './styles.css'

const TodoItem = ({ title, done }) => {
   return (
      <div>
         <p
            className={classNames({
               done: done
            })}
         >{title}</p>
      </div >
   )
}

export default TodoItem
