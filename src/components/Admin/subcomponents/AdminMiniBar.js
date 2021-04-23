import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CaretDown, CaretDownFill, CaretUp } from 'react-bootstrap-icons';
import QnA1 from './QnA1';
import QnA2 from './QnA2';

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

export default function AdminMiniBar(props) {
  const [show, setShow] = useState(false);
  const [qnaShow, setQnaShow] = useState(false);

  const onToggleHandler = () => {
    setShow(!show);
  };

  const onChange = (p) => {
    setQnaShow(p);
  };

  return (
    <>
      <Bar className={'container-fluid'}>
        <div className={'col-10'}>
          {props.name}
          {(props.id === 'QnA' || props.id === 'AdminBoard') &&
            (show === true ? (
              <ArrowUp onClick={onToggleHandler} />
            ) : (
              <ArrowDown onClick={onToggleHandler} />
            ))}
          {props.id === 'Calendar' && <> [ 2021년 4월 ]</>}
        </div>
        <div className={'col-2'}>
          {(props.id === 'AdminBoard' ||
            props.id === 'QnA' ||
            props.id === 'AdminStatistData') && (
            <NavLink to={props.id}>
              <More>More</More>
            </NavLink>
          )}
        </div>
      </Bar>
      {show && (
        <Bar
          className={'container-fluid'}
          style={{ padding: 0, textAlign: 'center' }}
        >
          {props.id === 'QnA' ? (
            <>
              <SubMenu className={'col-3'} onClick={onChange(true)}>
                문의
              </SubMenu>
              <SubMenu className={'col-3'} onClick={onChange(false)}>
                신고
              </SubMenu>
            </>
          ) : (
            <>
              <SubMenu className={'col-3'}>모임게시판</SubMenu>
              <SubMenu className={'col-3'}>자유게시판</SubMenu>
            </>
          )}
        </Bar>
      )}

      {props.id === 'QnA' && qnaShow === true ? <QnA1 /> : <QnA2 />}
    </>
  );
}
