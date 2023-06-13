import { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputlist, setInputlist] = useState("");
  const [btn, setBtn] = useState(true);
  const [editTodoId, setEditTodoId] = useState("");

  const todoList = (e) => {
    return setInputlist(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault();
    if (inputlist !== "") {
      const inputData = { id: new Date().getTime().toString(), name: inputlist }
      setTodos((oldtodo) => {
        return [...oldtodo, inputData];
      });
    }
    setInputlist("");
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((elem) =>
        elem.id === editTodoId
          ? (elem = { id: elem.id, name: inputlist })
          : { id: elem.id, name: elem.name }
      )
    )
    setBtn(true)
    setInputlist("");
  }

  const getBtn = (data) => {
    setBtn(data)
  }

  const EditTodo = (data) => {
    setInputlist(data.name)
    setEditTodoId(data.id)
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <form>
          <input type="text" placeholder="Add a ToDo" onChange={todoList} value={inputlist} />
          {btn ? <button type="submit" className='add' onClick={addTodo} >+</button>
            : <button type="submit" className='update' onClick={handleUpdate} >update</button>}
        </form>
        <ul className="alltodo">
          {todos.map((todo, index) => {
            return <TodoList
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              getBtn={getBtn}
              EditTodo={EditTodo}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
