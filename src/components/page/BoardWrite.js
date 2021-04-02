import React from 'react';
import styled from 'styled-components';
import { Plus, Dash, File } from 'react-bootstrap-icons';

const SelectBox = styled.select`
  height: 40px;
  width: 10%;
  background-color: rgba(250, 176, 24, 0.8);
  border: none;
  &:focus {
    outline: none;
  }
`;

const InputBox = styled.input`
  height: 45px;
  width: 89%;
  background-color: rgba(246, 218, 66, 0.3);
  border: none;
  margin: 1% 0 1% 1%;
  &:focus {
    outline: none;
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

const PlusEmoji = styled(Plus)`
  font-size: 40px;
  background-color: rgb(249, 130, 15);
  color: white;
  margin: 1% 0.5% 1% 0;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const MinusEmoji = styled(Dash)`
  font-size: 40px;
  background-color: rgb(249, 130, 15);
  color: white;
  margin: 1% 0.5% 1% 0;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const FileButton = styled.button`
  font-size: 22px;
  background-color: rgb(250, 176, 24);
  color: white;
  padding: 0.3% 1%;
  border-radius: 15px;
  border: none;
  transform: translateY(10%);
`;

const Box = styled.div`
  border: 1px solid black;
  height: 5%;
  width: 45%;
  margin: 1% 1% 1% 3%;
`;

export default function BoardWrite(props) {
  return (
    <div className="row">
      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
      <div
        className={'col-md-10'}
        style={{
          padding: '3% 4% 0 4%',
          fontSize: 'larger',
        }}
      >
        <h3 style={{ fontWeight: 'bold' }}>모임개설</h3>
        <SelectBox>
          <option>카테고리</option>
          <option>게임</option>
        </SelectBox>
        <InputBox placeholder={'제목을 입력해 주세요.'} />
        <TextBox rows={'30'} placeholder={'내용을 입력해 주세요.'} />
        <PlusEmoji />
        <MinusEmoji />
        <FileButton>첨부파일</FileButton>

        <h3 style={{ fontWeight: 'bold', margin: '5% 0 2%' }}>모임 상세</h3>
        <div style={{ border: '1px solid rgb(249,130,15)', height: '1000px' }}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
      </div>
      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
