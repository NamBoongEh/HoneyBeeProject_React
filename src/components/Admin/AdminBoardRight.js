import React from 'react';
import AdminMiniBar from './subcomponents/AdminMiniBar';
import InfoArea from './subcomponents/InfoArea';
import TodosContainer from '../../containers/TodosContainer';
import CalendarContainer from '../../containers/CalendarContainer';

const AdminBoardRight = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ zIndex: props.zIndex, padding: 0 }}
      >
        <InfoArea />
        <AdminMiniBar name={'달력'} id={'Calendar'} />
        <CalendarContainer />
        <AdminMiniBar name={'할 일'} id={'null'} />
        <div
          style={{
            overflow: 'auto',
            height: '300px',
            marginBottom: '5%',
            backgroundColor: 'white',
          }}
        >
          <TodosContainer />
        </div>
      </div>
    </>
  );
};

export default AdminBoardRight;
