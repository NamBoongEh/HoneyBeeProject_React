import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export default function AdminMiniBar(props) {
  return (
    <>
      <Bar className={'container-fluid'}>
        <div className={'col-10'}>
          {props.name}
          {props.id === 'Calendar' && <> [ 2021년 4월 ]</>}
        </div>
        <div className={'col-2'}>
          {props.id === 'AdminStatistData' && (
            <NavLink to={props.id}>
              <More>More</More>
            </NavLink>
          )}
        </div>
      </Bar>
    </>
  );
}
