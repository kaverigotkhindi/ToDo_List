import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos    }) =>{
// console.log(todos);
    
    return(
<div className="todo-container">
<ul className="todo-list">
{ todos.map(( todo ) => (//using map function because for each of the array contents the <Todo/> component should be displayed 
    <Todo text ={ todo.text } key ={ todo.id }/>
    
))}
</ul>
</div>

);}

export default TodoList;