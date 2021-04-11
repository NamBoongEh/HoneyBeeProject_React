import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DashSquareFill, PlusSquareFill } from 'react-bootstrap-icons';

const Plus = styled(PlusSquareFill)`
  color: lightcoral;
  zoom: 1.4;
  margin: 0 1% 1% 0;
  &:hover {
    cursor: pointer;
  }
`;

const Minus = styled(DashSquareFill)`
  color: lightskyblue;
  zoom: 1.4;
  margin: 0 1% 1% 0;
  &:hover {
    cursor: pointer;
  }
`;

const InputBar = styled.input`
  width: 45%;
  height: 8%;
  border-radius: 25px;
  border: none;
  padding-left: 15px;
  background-color: #eeeeee;
  font-size: medium;
  &:focus {
    outline: none;
  }
`;

const HobbyButton = styled.button`
  width: 15%;
  border-radius: 25px;
  border: none;
  background-color: lemonchiffon;
  text-align: center;
  font-size: smaller;
  &:focus {
    outline: none;
  }
`;

const DoubleCheck = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #bbbbbb;
  width: 27%;
  height: 6.5%;
  line-height: normal;
  font-size: medium;
`;

export default function Register1() {
  const [hobby, setHobby] = useState(false);
  const [area, setArea] = useState(false);

  const addHobby = () => {
    setHobby(!hobby);
  };

  const addArea = () => {
    setArea(!area);
  };

  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <div
        className={'container'}
        style={{
          backgroundColor: 'white',
          padding: '40px 40px 60px 40px',
          height: '50%',
          width: '50%',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <h3 style={{ fontWeight: 'bold' }}>회원가입</h3>
        <h3
          style={{ fontWeight: 'bold', color: '#4B89DC', paddingTop: '40px' }}
        >
          필수정보
        </h3>
        <div class="row" style={{ paddingBottom: '30px' }}>
          <div
            className={'col-3'}
            style={{
              fontSize: 'x-large',
              fontWeight: 'bold',
              lineHeight: '5rem',
            }}
          >
            아이디(이메일)
            <br />
            <br />
            비밀번호
            <br />
            이름
            <br />
            닉네임
            <br />
            생년월일
            <br />
          </div>
          <div
            className={'col-9'}
            style={{
              fontSize: 'larger',
              lineHeight: '5rem',
            }}
          >
            <InputBar style={{ width: '30%' }} /> @{' '}
            <InputBar style={{ width: '30%' }} />{' '}
            <select>
              <option>이메일 선택</option>
              <option value="gmail.com">gmail.com</option>
              <option value="kakao.com">kakao.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="korea.com">korea.com</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
              <option>직접 입력하기</option>
            </select>
            <br />
            <DoubleCheck>이메일 중복 체크</DoubleCheck>
            <br />
            <InputBar placeholder={'비밀번호를 입력해주세요'} />
            <br />
            <InputBar placeholder={'이름을 입력해주세요'} />
            <br />
            <InputBar placeholder={'닉네임을 입력해주세요'} />
            <DoubleCheck style={{ width: '20%', marginLeft: '5%' }}>
              중복확인
            </DoubleCheck>
            <br />
            <div>
              <select id={'year'}>
                <option>2012</option>
              </select>
              년도{' '}
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="11">11</option>
              </select>{' '}
              월{' '}
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="30">30</option>
              </select>{' '}
              일{' '}
            </div>
          </div>
        </div>
        <hr
          style={{
            borderColor: 'lightgray',
            borderWidth: '3px',
            width: '100%',
            paddingBottom: '30px',
          }}
        />

        <h3 style={{ fontWeight: 'bold' }}>관심정보</h3>

        <div style={{ paddingTop: '50px' }}>
          <div className="row">
            <div
              className={'col-3'}
              style={{
                fontSize: 'x-large',
                fontWeight: 'bold',
              }}
            >
              관심 지역
            </div>

            <div
              className={'col-9'}
              style={{
                fontSize: 'larger',
                lineHeight: '2.5rem',
              }}
            >
              {area && <HobbyButton>서울/경기</HobbyButton>}
            </div>
          </div>

          <div style={{ paddingTop: '20px' }}>
            <div className="row">
              <div
                className={'col-3'}
                style={{
                  fontSize: 'x-large',
                  textAlign: 'right',
                  lineHeight: '50px',
                  fontWeight: 'bold',
                }}
              >
                지역
              </div>

              <div
                className={'col-9'}
                style={{
                  fontSize: 'larger',
                  lineHeight: '2.5rem',
                  paddingTop: '10px',
                }}
              >
                <div
                  className={'container'}
                  style={{
                    backgroundColor: '#DDDDDD',
                    width: '90%',
                    float: 'left',
                    verticalAlign: 'middle',
                  }}
                >
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: 'bold',
                    }}
                  >
                    관심 지역 선택
                  </div>
                </div>
                <div
                  className={'container'}
                  style={{
                    borderWidth: '1px',
                    borderColor: '#DDDDDD',
                    borderStyle: 'solid',
                    width: '90%',
                    float: 'left',
                    paddingTop: '20px',
                    lineHeight: '250%',
                  }}
                >
                  <Plus />
                  <Minus />
                  <select>
                    <option>시,도 선택</option>
                    <option value={'서울시'}>서울시</option>
                    <option value={'제주도'}>제주도</option>
                  </select>{' '}
                  <select>
                    <option>구,군 선택</option>
                    <option value={'광명시'}>광명시</option>
                    <option value={'구리시'}>구리시</option>
                  </select>
                  <button onClick={() => addArea()}>추가</button>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '50px' }}>
            <div className="row">
              <div
                className={'col-3'}
                style={{
                  fontSize: 'x-large',
                  fontWeight: 'bold',
                }}
              >
                관심 주제
              </div>

              <div
                className={'col-9'}
                style={{
                  fontSize: 'larger',
                  lineHeight: '2.5rem',
                }}
              >
                {hobby && <HobbyButton>교육</HobbyButton>}
                {hobby && <HobbyButton>세미나/컨퍼런스</HobbyButton>}
              </div>
            </div>
            <div style={{ paddingTop: '20px' }} />
            <div className="row">
              <div
                className={'col-3'}
                style={{
                  fontSize: 'x-large',
                  textAlign: 'right',
                  lineHeight: '65px',
                  fontWeight: 'bold',
                }}
              >
                모임
              </div>

              <div
                className={'col-9'}
                style={{
                  lineHeight: '2.5rem',
                  paddingTop: '10px',
                }}
              >
                <table style={{ width: '100%', height: '110%' }}>
                  <tr>
                    <td>
                      <label for={'education'}>
                        <input
                          id={'education'}
                          type={'checkbox'}
                          onClick={() => addHobby()}
                        />{' '}
                        교육
                      </label>
                    </td>
                    <td>
                      <label for={'seminar'}>
                        <input
                          id={'seminar'}
                          type={'checkbox'}
                          onClick={() => addHobby()}
                        />{' '}
                        세미나/컨퍼런스
                      </label>
                    </td>
                    <td>
                      <label for={'lecture'}>
                        <input id={'lecture'} type={'checkbox'} /> 강연
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for={'hobby'}>
                        <input id={'hobby'} type={'checkbox'} /> 취미/소모임
                      </label>
                    </td>
                    <td>
                      <label for={'art'}>
                        <input id={'art'} type={'checkbox'} /> 문화/예술/방송
                      </label>
                    </td>
                    <td>
                      <label for={'competition'}>
                        <input id={'competition'} type={'checkbox'} /> 공모전
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for={'exhibition'}>
                        <input id={'exhibition'} type={'checkbox'} />{' '}
                        전시/박람회
                      </label>
                    </td>
                    <td>
                      <label for={'event'}>
                        <input id={'event'} type={'checkbox'} /> 이벤트/파티
                      </label>
                    </td>
                    <td>
                      <label for={'beauty'}>
                        <input id={'beauty'} type={'checkbox'} /> 패션/뷰티
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for={'ect'}>
                        <input id={'ect'} type={'checkbox'} /> 기타
                      </label>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '60px' }} />
          <Link to="./login">
            <button
              style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                fontSize: '18px',
                padding: '10px 20px 10px 20px',
                borderRadius: '10px',
              }}
            >
              뒤로가기
            </button>
          </Link>
          <Link to="./Register2">
            <button
              style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                fontSize: '18px',
                padding: '10px 20px 10px 20px',
                borderRadius: '10px',
                float: 'right',
              }}
            >
              다음
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
