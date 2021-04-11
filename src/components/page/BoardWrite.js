import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Plus, Dash, Dot } from 'react-bootstrap-icons';

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

const InputBox2 = styled.input`
  width: 70%;
  height: 43px;
  border-radius: 10px;
  margin-left: 3%;
  margin-right: 3%;
  background-color: rgba(246, 218, 66, 0.3);
  border: none;
  float: right;
  &:focus {
    outline: none;
  }
`;

const DateBox = styled.input`
  width: 32%;
  height: 43px;
  border-radius: 10px;
  margin-left: 3%;
  margin-right: 3%;
  background-color: rgba(246, 218, 66, 0.3);
  border: none;
  float: right;
  &:focus {
    outline: none;
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
  height: 6%;
  width: 45%;
  margin: 1% 1% 1.5% 3%;
  font-weight: bold;
  font-size: 25px;
`;

const ClickButton = styled.button`
  width: 10%;
  height: 70px;
  background-color: rgb(48, 27, 1);
  color: white;
  border: none;
  padding: 8px;
  font-size: x-large;
  border-radius: 13px;
  margin: 5% 30px 10%;
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
        <div
          style={{
            border: '1px solid rgb(249,130,15)',
            height: '800px',
          }}
        >
          <Box>
            <Dot />
            모임일자
            <DateBox readOnly />
            <Dash style={{ transform: 'translateX(310px)' }} />
            <DateBox readOnly />
          </Box>
          <Box>
            <Dot />
            모집인원
            <InputBox2 />
          </Box>
          <Box>
            <Dot />
            비용
            <input
              type={'checkbox'}
              style={{ zoom: 1.5, marginLeft: '20%' }}
            />{' '}
            무료
            <input
              type={'checkbox'}
              style={{ zoom: 1.5, marginLeft: '5%' }}
            />{' '}
            유료
            <InputBox2
              style={{
                width: '37%',
              }}
            />
          </Box>
          <Box>
            <Dot />
            모집기간
            <DateBox readOnly />
            <Dash style={{ transform: 'translateX(310px)' }} />
            <DateBox readOnly />
          </Box>
          <Box>
            <Dot />
            위치
            <InputBox2 />
          </Box>
          <div
            style={{ transform: 'translate(800px, -360px)', marginRight: '3%' }}
          >
            <Box>
              <h3 style={{ fontWeight: 'bold' }}>썸네일</h3>
            </Box>
            <Box style={{ fontWeight: 'lighter', fontSize: '18px' }}>
              <FileButton
                style={{
                  transform: 'translateY(0px)',
                  marginRight: '3%',
                }}
              >
                첨부파일
              </FileButton>
              글 쓰이면?ㄴㅇ럼ㄷㅈ히ㅏㅓㅗㅂ제대햐ㅗㅂㅈ데ㅐㅑ허
            </Box>
            <Box
              style={{
                border: '1px solid black',
                height: '210px',
                width: '15%',
                marginRight: '3%',
              }}
            >
              귀여운 미리보기 이미지를 넣어주세요
            </Box>
          </div>
          <Box
            style={{
              border: '1px solid black',
              height: '390px',
              width: '94%',
              marginRight: '3%',
              transform: 'translateY(-350px)',
            }}
          >
            지도
          </Box>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to={'./Board'}>
            <ClickButton style={{ backgroundColor: 'rgb(246,130,15)' }}>
              모임등록
            </ClickButton>
          </Link>
          <Link to={'./Board'}>
            <ClickButton>등록취소</ClickButton>
          </Link>
        </div>
      </div>
      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
