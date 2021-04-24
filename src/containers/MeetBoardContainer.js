import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import MeetBoard from '../components/Admin/subcomponents/MeetBoard';

const MeetBoardContainer = ({
  input,
  meetboard,
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
      meetboard={meetboard}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ meetboard }) => ({
    input: meetboard.input,
    meetboard: meetboard.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(MeetBoardContainer);
