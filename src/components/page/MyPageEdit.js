import React from 'react';
import styled from 'styled-components';
import { PersonBadge, ToggleOn, ToggleOff } from 'react-bootstrap-icons';

const Toggleoff = styled(ToggleOff)`
  color: mediumseagreen;
  zoom: 1.8;
  margin-left: 2%;
`;

const Toggleon = styled(ToggleOn)`
  color: mediumseagreen;
  zoom: 1.8;
  margin-left: 2%;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-size: smaller;
  padding: 2% 3%;
  margin: 0 2%;
  border-radius: 10px;
`;

const Button2 = styled.button`
  background-color: rgb(178, 114, 8);
  color: white;
  border: none;
  font-size: 14px;
  padding: 1.5% 1%;
  margin: 0 2%;
  border-radius: 10px;
  line-height: 0;
`;

const Div1 = styled.div`
  width: 100%;
  border: 1px solid black;
  display: inline-block;
  margin-top: 5%;
`;

const Div2 = styled.div`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 1%;
`;

const Div3 = styled.div`
  display: inline-block;
  margin-bottom: 1%;
`;

const Div4 = styled.div`
  width: 100%;
  border: 1px solid black;
  display: inline-block;
  margin-top: 2%;
`;

export default function MyPageEdit(props) {
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
        <div
          className={'col-md-3'}
          style={{
            border: '1px solid black',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '150px',
              height: '150px',
              border: '1px solid black',
              marginBottom: '5%',
            }}
          >
            프로필 이미지
          </div>
          <Button>썸네일 변경</Button>
          <Button
            style={{ padding: '2% 10%', backgroundColor: 'rgb(48,27,1)' }}
          >
            삭제
          </Button>
        </div>
        <div
          className={'col-md-9'}
          style={{
            border: '1px solid black',
            display: 'inline-block',
            paddingLeft: '3%',
          }}
        >
          <PersonBadge style={{ zoom: 3, marginRight: '1%' }} />
          <div
            style={{
              display: 'inline',
              fontWeight: 'bold',
              fontSize: 'x-large',
            }}
          >
            남붕어 님
          </div>
          <Button2>변경하기</Button2>
          <hr
            style={{
              margin: '0.5% 0 2%',
              backgroundColor: 'lightgray',
              width: '25%',
            }}
          />
          <Div2 className={'col-2'}>이메일</Div2>
          <Div3 className={'col-10'}>
            남붕어@naver.com
            <Toggleon />
          </Div3>
          <Div2 className={'col-2'}>휴대전화</Div2>
          <Div3 className={'col-10'}>
            010-0000-0000
            <Toggleoff />
            <Button2>인증하기</Button2>
          </Div3>
          <Div2 className={'col-2'}>가입일</Div2>
          <Div3 className={'col-10'}>1993-09-16</Div3>
        </div>
        <Div1>
          <h4 style={{ color: 'rgb(178, 114, 8)', fontWeight: 'bold' }}>
            회원정보
          </h4>
        </Div1>
        <Div4 className={'col-2'}>ㅎㅇ</Div4>
        <Div4 className={'col-10'}>ㅎㅇ</Div4>
      </div>

      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
