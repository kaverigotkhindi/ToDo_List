import React ,{ useState , useEffect } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
const[ inputText, setInputText ] = useState("");
const[ todos , setTodos ] = useState([]);
const[ status,setStatus ] = useState("Completed");
const[ filteredTodos,setFilteredTodos ] = useState([]);

//functions
useEffect(()=>{ 
  filterHandler();
},[status]);

const filterHandler = () => {
  switch (status) {
case  "completed" :
  setFilteredTodos( todos.filter((todo) =>  todo.completed === true));
  break;
  case  "uncompleted" :
  setFilteredTodos( todos.filter((todo) =>  todo.completed === false));
  break;
  default : 
  setFilteredTodos(todos);
  break;
  }
}
  return (
    <div className="App">
      
      <Form todos = { todos } 
      setTodos = { setTodos } 
      inputText={ inputText } 
      setInputText={ setInputText } 
      status ={ status}
      setStatus = { setStatus }/>

      <TodoList filteredTodos={ filteredTodos } 
      todos = { todos } 
      setTodos ={ setTodos }/>
    </div>
  );
}

export default App;
