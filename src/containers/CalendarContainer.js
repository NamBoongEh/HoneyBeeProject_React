import React, { useState } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Admin/subcomponents/Calendar';
import { changeInput, insert, remove, toggle } from '../modules/todos';

// 컨테이너에 빨간줄이 계속 생겨서 이런 주석을 달으면 에러가 안난다. 뭔진 모르겠지만 지우지 말것!!!
// eslint-disable-next-line no-shadow
const CalendarContainer = ({
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
    <Calendar
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
)(CalendarContainer);
