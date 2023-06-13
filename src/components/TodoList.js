import React, { useState } from 'react'

const TodoList = ({ todo, todos, setTodos, getBtn, EditTodo }) => {

  const [check, setCheck] = useState(true);
  const [toggle, setToggle] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  }
  const deleteTodo = () => {
    const delTodo = todos.filter((to) => to.id !== todo.id);
    return setTodos([...delTodo]);
  }
  const editTodo = () => {
    setToggle(false);
    getBtn(toggle);
    const findTodo = todos.find((t) => t.id === todo.id)
    EditTodo(findTodo);
  }
  return (
    <div>
      <li className="singletodo">
        <input type="checkbox" className='checkbox' onClick={handleCheck} />
        {check ? <span className="todotext">{todo.name}</span>
          : <span className="todotext_check">{todo.name}</span>}
        <button className='edit' onClick={editTodo} >edit</button>
        <button onClick={deleteTodo}>X</button>
      </li>
    </div>
  )
}

export default TodoList
