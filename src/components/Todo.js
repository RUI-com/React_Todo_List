import React from 'react';

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
    <div className='host'>
    <div className='edit-icon' onClick={() => editTodo(task.id)}></div>
    <div className='delete-icon fa-trash' onClick={() => deleteTodo(task.id)}></div>
      
    </div>
    
    </div>
  )
}

export default Todo;
