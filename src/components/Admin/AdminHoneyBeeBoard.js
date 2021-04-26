import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CaretDown, CaretDownFill, CaretUp } from 'react-bootstrap-icons';
import MeetBoardContainer from '../../containers/MeetBoardContainer';
import FreeBoardContainer from '../../containers/FreeBoardContainer';

const Bar = styled.div`
  background-color: dodgerblue;
  display: flex;
  color: white;
  padding: 5px 0;
`;

const More = styled.button`
  border-radius: 30px;
  padding: 2px 10px;
  color: white;
  background-color: dodgerblue;
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
    background: darkblue;
    color: white;
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
      {/* 메뉴 시작 */}
      <Bar className={'container-fluid'}>
        <div className={'col-10'}>
          {props.name}
          {/* 화살표 이벤트 시작 */}
          {show === true ? (
            <ArrowUp onClick={onToggleHandler} />
          ) : (
            <ArrowDown onClick={onToggleHandler} />
          )}
          {/* 화살표 이벤트 종료 */}
        </div>
        <NavLink to={props.name}>
          <More>More</More>
        </NavLink>
      </Bar>
      {/* 메뉴 종료 */}
      {/* 서브 메뉴 보여주는 이벤트 시작 */}
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
      {/* 서브 메뉴 보여주는 이벤트 시작 */}
      {/* board 이름에 따른 컨테이너 가져오기 */}
      {page === 'MeetBoard' ? <MeetBoardContainer /> : <FreeBoardContainer />}
    </>
  );
}
