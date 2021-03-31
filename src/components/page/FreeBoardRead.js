import React from 'react';
import { HeartFill, Heart, BellFill, Textarea } from 'react-bootstrap-icons';
import styled from 'styled-components';

const FillHeart = styled(HeartFill)`
  float: right;
  margin: 5px 5px 5% 5px;
  font-size: 40px;
  color: #cd0000;
  &:hover {
    cursor: pointer;
  }
`;

const EmptyHeart = styled(Heart)`
  float: right;
  margin: 5px 5px 5% 5px;
  font-size: 40px;
  color: #cd0000;
  &:hover {
    cursor: pointer;
  }
`;

const FillBell = styled(BellFill)`
  float: right;
  margin: 5px 5px 5% 5px;
  font-size: 40px;
  color: #ffb400;
  &:hover {
    cursor: pointer;
  }
`;

const TextBox = styled.textarea`
  resize: none;
  width: 100%;
  background-color: rgba(246, 218, 66, 0.3);
  border: none;
  &:focus {
    outline: none;
  }
`;

export default function FreeBoardRead(props) {
  return (
    <div className="row">
      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
      <div
        className={'col-10'}
        style={{
          padding: '3% 4% 0 4%',
          fontSize: 'larger',
        }}
      >
        <h3 style={{ float: 'left' }}>개쩌는 게시글제목</h3>
        <button
          style={{
            float: 'right',
            backgroundColor: 'rgb(249,130,15)',
            color: 'white',
            border: 'none',
            padding: '6px 15px',
            borderRadius: '13px',
            marginRight: '0.5%',
          }}
        >
          삭제
        </button>
        <div style={{ float: 'right', margin: '5px' }}>날짜 </div>
        <div style={{ float: 'right', margin: '5px' }}>글쓴이 </div>
        <hr
          style={{
            borderColor: 'lightgray',
            borderWidth: '3px',
            width: '100%',
            marginTop: '50px',
            paddingBottom: '20px',
          }}
        />
        <TextBox rows={'30'} readOnly={'true'} />
        <FillBell />
        <FillHeart />
        <EmptyHeart />
      </div>
      <div
        className={'col-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
