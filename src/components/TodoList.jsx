import React from "react";
import Todo from './Todo'

function TodoList({todos,checkTodo, deleteTodo }) {
  
  return (
    <div >
        {todos.map(todo=>(<Todo key={todo.id} id={todo.id} title={todo.title} checkTodo={checkTodo} isCompleted={todo.isCompleted} deleteTodo={deleteTodo}/>))}
      
    </div>
  );
}

export default TodoList
;
