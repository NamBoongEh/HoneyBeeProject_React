import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import MeetBoard from '../components/Admin/subcomponents/MeetBoard';

const MeetBoardContainer = ({
  input,
  meetBoard,
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
    <MeetBoard
      input={input}
      meetBoard={meetBoard}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ meetBoard }) => ({
    input: meetBoard.input,
    meetBoard: meetBoard.meetBoard,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(MeetBoardContainer);
