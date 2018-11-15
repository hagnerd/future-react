import React from 'react';

import { Form, Button, Label, TextInput } from '../../../ui';
import { useForm } from '../../../utils';

/* 
  Goal - Learn how useReducer can help with CRUD operations, and complex state updates

  If you're working with the management of a list of things, useReducer will be your go to state
  management tool.

  React.useReducer returns an array where the first item is the store, and the second item is a dispatch function

  It requires two arguments and an optional third argument. The first the reducer function, (if you've used Redux you can write a reducer just like in redux), the second argument is the initial state of the store. The third argument is what is called a lazy initializer, essentially it is the argument that is sent to the dispatch function when on mount. 
*/

function todosReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function useTodos({ initialState = [], reducer }) {}

function NewTodoForm({ onSubmit }) {
  const { formState, handleChange, handleSubmit } = useForm({
    initialValues: { newTodo: 'Enter todo' },
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="newTodo">New Todo</Label>
      <TextInput
        type="text"
        id="newTodo"
        name="newTodo"
        value={formState.newTodo}
        onChange={handleChange}
      />
      <Button type="submit">Add Todo</Button>
    </Form>
  );
}

function TodoDetail({ todo, deleteTodo, toggleTodo }) {
  return (
    <li>
      {todo.content}{' '}
      <Button onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </Button>{' '}
      <Button onClick={() => deleteTodo(todo.id)}>X</Button>
    </li>
  );
}

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoDetail
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default function App() {
  // TODO: Call React.useReducer()

  return null;
  // (
  // <div>
  // <NewTodoForm />
  //   <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
  //
  // </div>
  // )
}
