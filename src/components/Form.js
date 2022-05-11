import React from "react";


const Form = ({ inputText , setInputText , todos , setTodos ,status , setStatus }) =>{
const inputTextHandler = (e) => {
  
  setInputText(e.target.value);
  
}
const submitTodoHandler = (e) =>{
  e.preventDefault();
  //[ { name : meeting , completed : false , id : Math.random()*1000},...already_added_todos]
  setTodos([... todos, { text : inputText , completed : false , id : Math.random()*1000 } ] );
setInputText("");//set the input box to blank after the recently submitted todo is added to the list below

}

const statusHandler = (e) =>{
  setStatus(e.target.value);
}


return(
<form>
      <input  value={ inputText } onChange={ inputTextHandler } type="text" className="todo-input" />
      <button onClick={ submitTodoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      
      <div className="select">
        <select onChange={ statusHandler } name="todos" className="filter-todo">
        <option value="Select the status" select hidden>Select the status</option>
          <option value="all">All</option>
          <option value="completed" >Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
);
}

export default Form;