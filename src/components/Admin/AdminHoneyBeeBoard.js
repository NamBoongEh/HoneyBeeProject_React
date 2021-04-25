import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CaretDown, CaretDownFill, CaretUp } from 'react-bootstrap-icons';
import MeetBoardContainer from '../../containers/MeetBoardContainer';
import FreeBoardContainer from '../../containers/FreeBoardContainer';

const Bar = styled.div`
  background-color: brown;
  display: flex;
  color: white;
  padding: 5px 0;
`;

const More = styled.button`
  border-radius: 30px;
  padding: 2px 10px;
  color: white;
  background-color: brown;
  border: 2px solid white;
`;

const ArrowDown = styled(CaretDown)`
  font-size: 25px;
  margin-left: 5px;

  //호버하면 삼각형 내용물이 채워지는 것으로 바뀌게 해주세요.
  &:hover {
    cursor: pointer;
  }
`;

const ArrowUp = styled(CaretUp)`
  font-size: 25px;
  margin-left: 5px;

  //호버하면 삼각형 내용물이 채워지는 것으로 바뀌게 해주세요.
  &:hover {
    cursor: pointer;
  }
`;
const SubMenu = styled.div`
  line-height: 1.8rem;
  &:hover {
    background: pink;
    color: black;
    cursor: pointer;
  }
`;

export default function AdminHoneyBeeBoard(props) {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState('MeetBoard');

  const onToggleHandler = () => {
    setShow(!show);
  };

  const showPage = (e) => {
    setPage(e.target.id);
  };

  return (
    <>
      <Bar className={'container-fluid'}>
        <div className={'col-10'}>
          {props.name}
          {show === true ? (
            <ArrowUp onClick={onToggleHandler} />
          ) : (
            <ArrowDown onClick={onToggleHandler} />
          )}
        </div>
        <NavLink to={props.name}>
          <More>More</More>
        </NavLink>
      </Bar>
      {show && (
        <Bar
          className={'container-fluid'}
          style={{ padding: 0, textAlign: 'center' }}
        >
          <SubMenu
            className={'col-3'}
            id={'MeetBoard'}
            onClick={(e) => showPage(e)}
          >
            모임게시판
          </SubMenu>
          <SubMenu
            className={'col-3'}
            id={'FreeBoard'}
            onClick={(e) => showPage(e)}
          >
            자유게시판
          </SubMenu>
        </Bar>
      )}
      {page === 'MeetBoard' ? <MeetBoardContainer /> : <FreeBoardContainer />}
    </>
  );
}
