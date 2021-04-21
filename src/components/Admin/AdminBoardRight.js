import React, { useState } from 'react';
import AdminMiniBar from './components/AdminMiniBar';
import TodoList from './TodoList';
import InfoArea from './components/InfoArea';

const AdminBoardRight = (props) => {
  const [todos, setTodos] = useState([
    {
      date: '1월1일',
      text: '여기에 할 일을 넣는다.',
      checked: true,
    },
    {
      date: '1월1일',
      text: '여기에 할 일을 넣는다.',
      checked: true,
    },
    {
      date: '1월1일',
      text: '여기에 할 일을 넣는다.',
      checked: false,
    },
  ]);

  return (
    <>
      <div className={'container-fluid'} style={{ backgroundColor: 'pink' }}>
        <InfoArea />
        <AdminMiniBar name={'달력'} id={'null'} />
        <div
          className={'container-fluid'}
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          표
        </div>
        <AdminMiniBar name={'할 일'} id={'null'} />
        <div
          style={{
            overflow: 'auto',
            height: '300px',
            marginBottom: '5%',
            backgroundColor: 'white',
          }}
        >
          <TodoList todos={{ todos }} />
        </div>
      </div>
    </>
  );
};

export default AdminBoardRight;
