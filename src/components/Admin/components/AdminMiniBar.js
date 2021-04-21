import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CaretDown, CaretDownFill } from 'react-bootstrap-icons';

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

const Arrow = styled(CaretDown)`
  font-size: 25px;
  margin-left: 5px;

  //호버하면 삼각형 내용물이 채워지는 것으로 바뀌게 해주세요.
  &:hover {
    cursor: pointer;
  }
`;

export default function AdminMiniBar(props) {
  return (
    <>
      <Bar className={'container-fluid'}>
        <div className={'col-10'}>
          {props.name}
          {props.id === 'AdminBoard' && <Arrow />}
        </div>
        <div className={'col-2'}>
          {props.id !== 'null' && (
            <NavLink to={props.id}>
              <More>More</More>
            </NavLink>
          )}
        </div>
      </Bar>
    </>
  );
}
