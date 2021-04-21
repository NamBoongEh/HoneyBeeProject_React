import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <div className={'TodoList'}>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
