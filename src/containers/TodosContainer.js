import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Admin/Todos';

const TodosContainer = ({
  input,
  todos,
  // eslint-disable-next-line no-shadow
  changeInput,
  // eslint-disable-next-line no-shadow
  insert,
  // eslint-disable-next-line no-shadow
  toggle,
  // eslint-disable-next-line no-shadow
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
