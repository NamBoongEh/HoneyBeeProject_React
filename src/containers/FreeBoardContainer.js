import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import FreeBoard from '../components/Admin/subcomponents/FreeBoard';

const FreeBoardContainer = ({
  input,
  freeBoard,
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
    <FreeBoard
      input={input}
      freeBoard={freeBoard}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ freeBoard }) => ({
    input: freeBoard.input,
    freeBoard: freeBoard.freeBoard,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(FreeBoardContainer);
