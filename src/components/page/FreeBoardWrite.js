import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TextBox = styled.textarea`
  resize: none;
  width: 100%;
  background-color: rgba(246, 218, 66, 0.5);
  border: none;
  &:focus {
    outline: none;
  }
`;

const InputBox = styled.input`
  height: 4%;
  width: 100%;
  background-color: rgba(246, 218, 66, 0.3);
  border: none;
  &:focus {
    outline: none;
  }
`;

const ClickButton = styled.button`
  float: right;
  background-color: rgb(48, 27, 1);
  color: white;
  border: none;
  padding: 8px 25px;
  border-radius: 13px;
  margin: 10px 10px 8%;
`;

export default function FreeBoardWrite(props) {
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
        <InputBox placeholder={'제목을 입력해 주세요.'} />
        <hr
          style={{
            borderColor: 'lightgray',
            borderWidth: '3px',
            width: '100%',
            marginTop: '20px',
            paddingBottom: '20px',
          }}
        />
        <TextBox rows={'30'} placeholder={'내용을 입력해 주세요.'} />
        <ClickButton style={{ float: 'left' }}>임시저장</ClickButton>

        <Link to={'./FreeBoard'}>
          <ClickButton style={{ backgroundColor: 'rgb(246,130,15)' }}>
            저장
          </ClickButton>
        </Link>

        <Link to={'./FreeBoard'}>
          <ClickButton>취소</ClickButton>
        </Link>
      </div>
      <div
        className={'col-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
