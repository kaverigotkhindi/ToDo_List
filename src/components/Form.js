import React from "react";


const Form = ({ inputText , setInputText , todos , setTodos }) =>{
const inputTextHandler = (e) => {
  
  setInputText(e.target.value);
  
}
const submitTodoHandler = (e) =>{
  e.preventDefault();
  //[ { name : meeting , completed : false , id : Math.random()*1000},...already_added_todos]
  setTodos([ { text : inputText , completed : false , id : Math.random()*1000 },... todos ] );
setInputText("");//set the input box to blank after the recently submitted todo is added to the list below

}


return(
<form>
      <input  value={ inputText } onChange={ inputTextHandler } type="text" className="todo-input" />
      <button onClick={ submitTodoHandler } className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
);
}

export default Form ;