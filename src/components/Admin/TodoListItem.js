import React from 'react';
import { DashCircleFill, Square, CheckSquare } from 'react-bootstrap-icons';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className={'TodoListItem'}>
      <div className={'text'}>ㅎㅇ</div>
      <div className={'remove'}>
        <DashCircleFill />
      </div>
    </div>
  );
};

export default TodoListItem;
