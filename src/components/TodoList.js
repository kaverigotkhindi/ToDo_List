import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos , setTodos , filteredTodos  }) =>{
console.log(filteredTodos);
    
    return(
<div className="todo-container">
<ul className="todo-list">
{ todos.map(( todo ) => (
    //using map function because for each of the array contents the <Todo/> component should be displayed 
    <Todo 
    text ={ todo.text } 
    key ={ todo.id } 
    setTodos ={ setTodos } 
    todos = { todos } 
    todo ={ todo } />
    
))}
</ul>
</div>

);}

export default TodoList;