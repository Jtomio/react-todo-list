import React, { useState } from 'react';

import Form from "../components/Form";
import TodoItem from "../components/TodoItems";
import { Container, List } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  }

  const editTodo = (id, editedText) => {
    let todosArray = [...todos];

      for(let i in todosArray) {
        if(todosArray[i].id == id) {
          todosArray[i].text = editedText;
        }
      }

    // todosArray.splice(id, 1, {text: editedText, id: id});
    // setTodos(todosArray);
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
    <Form addTodo={addTodo} />
    <List sx={{ marginTop: "1em" }}>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginTop: "1rem"}} >
          <TodoItem
          editTodo={editTodo}
          todo={todo}
          deleteTodo={deleteTodo}
        />
        </div>
      ))}
    </List>
  </Container>
  )
}
