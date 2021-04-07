import React from 'react';
import styled from 'styled-components';
import { PersonBadge, ToggleOn, ToggleOff, Dot } from 'react-bootstrap-icons';

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
  background-color: rgb(249, 130, 15);
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
  display: inline-block;
  font-weight: bold;
`;

const Div5 = styled.div`
  width: 100%;
  display: inline-block;
`;

const Line = styled.hr`
  margin: 2.5% 0 2.5%;
  background: lightgray;
`;

const Select = styled.select`
  border: none;
  border-radius: 5px;
  padding-left: 1%;
  padding-right: 1%;
  margin-right: 3%;
  background-color: lightgray;
  width: 125px;
`;

const CheckBtn = styled.button`
  padding: 0.6% 5%;
  background-color: rgb(249, 130, 15);
  color: white;
  border: none;
  font-size: larger;
  border-radius: 10px;
  margin-top: 5%;
  margin-bottom: 1%;
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
            display: 'inline-block',
            textAlign: 'center',
            marginBottom: '4%',
          }}
        >
          <div
            style={{
              width: '150px',
              height: '150px',
              border: '1px solid black',
              marginBottom: '5%',
              transform: 'translateX(100px)',
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
          <Line
            style={{
              width: '27%',
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
          <h4
            style={{
              color: 'rgb(178, 114, 8)',
              fontWeight: 'bold',
            }}
          >
            회원정보
          </h4>
        </Div1>
        <Div4 className={'col-2'} style={{ marginTop: '2%' }}>
          성별
        </Div4>

        <Div5 className={'col-10'}>
          <input type={'checkbox'} /> 남
          <input type={'checkbox'} style={{ marginLeft: '5%' }} /> 여
        </Div5>
        <Line />

        <Div4 className={'col-2'}>생년월일</Div4>
        <Div5 className={'col-10'}>
          <Select>
            <option>1993</option>
          </Select>
          <Select>
            <option>9</option>
          </Select>
          <Select>
            <option>16</option>
          </Select>
        </Div5>
        <Line />

        <Div4 className={'col-2'}>관심지역</Div4>
        <Div5 className={'col-10'}>
          <Select>
            <option>지역선택</option>
          </Select>
        </Div5>
        <Line />

        <Div4 className={'col-2'}>관심분야</Div4>
        <Div5 className={'col-10'}>
          <Select>
            <option>게임</option>
            <option>요리</option>
            <option>애니메이션</option>
          </Select>
        </Div5>

        <div style={{ textAlign: 'center' }}>
          <CheckBtn>적용</CheckBtn>
        </div>
        <Line style={{ marginBottom: '5%' }} />

        <Div4 className={'col-2'} style={{ padding: '1% 0' }}>
          비밀번호 변경
          <br />
          <br />
          <br />
        </Div4>
        <Div5
          className={'col-10'}
          style={{
            padding: '1% 0 ',
            backgroundColor: 'lightgray',
            marginBottom: '3%',
          }}
        >
          <Dot /> 개인정보보호를 위해 최소 3개월 이내에는 정기적으로 비밀번호를
          변경해 주시는 것이 좋습니다.
          <br />
          <Dot /> 비밀번호는 쉬운번호나 타 사이트와 같을 경우 도용되기 쉽습니다.
          <br />
          <Dot /> 주민번호, 생일, 전화번호 등 개인정보와 연관된 문자나 숫자는
          보안상 위험이 높으므로 사용을 자제해 주세요.
        </Div5>

        <Div4 className={'col-2'} />
        <Div4 className={'col-10'} style={{ marginBottom: '1%' }}>
          현재 비밀번호 입력
        </Div4>
        <Div4 className={'col-2'} />
        <Div5 className={'col-10'} style={{ marginBottom: '3%' }}>
          <input
            placeholder={'기존 비밀번호를 입력해 주세요'}
            style={{
              width: '40%',
              height: '2.5rem',
              borderRadius: '5px',
              border: '2px solid lightgray',
            }}
          />
        </Div5>

        <Div4 className={'col-2'} />
        <Div4 className={'col-10'} style={{ marginBottom: '1%' }}>
          새로운 비밀번호 입력
        </Div4>
        <Div4 className={'col-2'} />
        <Div5 className={'col-10'} style={{ marginBottom: '3%' }}>
          <input
            placeholder={'새로운 비밀번호를 입력해 주세요'}
            style={{
              width: '40%',
              height: '2.5rem',
              borderRadius: '5px',
              border: '2px solid lightgray',
            }}
          />
          <br />
          <Dot /> 비밀번호는 소문자, 대문자, 숫자, 특수문자 포함 8자 이상으로
          입력해 주시기 바랍니다.
        </Div5>

        <Div4 className={'col-2'} />
        <Div4 className={'col-10'} style={{ marginBottom: '1%' }}>
          새로운 비밀번호 입력 확인
        </Div4>
        <Div4 className={'col-2'} />
        <Div5 className={'col-10'}>
          <input
            placeholder={'새로운 비밀번호를 한 번 더 입력해 주세요'}
            style={{
              width: '40%',
              height: '2.5rem',
              borderRadius: '5px',
              border: '2px solid lightgray',
            }}
          />
          <br />
          <Dot /> 새로운 비밀번호 변경확인을 위하여 다시 한 번 입력해 주시기
          바랍니다.
        </Div5>

        <div style={{ textAlign: 'center' }}>
          <CheckBtn style={{ paddingLeft: '1%', paddingRight: '1%' }}>
            비밀번호 변경완료
          </CheckBtn>
        </div>
        <Line />

        <Div4 className={'col-2'} />
        <Div5 className={'col-10'}>
          <Dot /> 탈퇴 사유를 선택해 주시기 바랍니다.
          <br />
          <Dot /> 허니비의 더 나은 서비스를 위하여 한 가지만 선택 부탁드립니다.
          <br />
          <br />
          <div style={{ lineHeight: '2.2rem' }}>
            <input type={'radio'} style={{ marginRight: '1%', zoom: '1.2' }} />
            <label>사용빈도가 낮아서</label>
            <br />
            <input type={'radio'} style={{ marginRight: '1%', zoom: '1.2' }} />
            <label>개인정보 유출이 우려되어서</label>
            <br />
            <input type={'radio'} style={{ marginRight: '1%', zoom: '1.2' }} />
            <label>사이트 이용시 장애가 많아서</label>
            <br />
            <input type={'radio'} style={{ marginRight: '1%', zoom: '1.2' }} />
            <label>서비스의 질에 대한 불만이 있어서</label>
            <br />
            <input type={'radio'} style={{ marginRight: '1%', zoom: '1.2' }} />
            <label>사이트 이용시 고객응대가 나빠서</label>
            <br />
            <input type={'radio'} style={{ marginRight: '1%', zoom: '1.2' }} />
            <label>기타</label>
            <input
              placeholder={'내용을 입력해주세요'}
              style={{ width: '30%', marginLeft: '1%' }}
            />
          </div>
        </Div5>
        <Line />

        <Div4 className={'col-2'} />
        <Div5 className={'col-10'}>
          <Dot /> 탈퇴할 이메일 아이디를 확인 해 주시기 바랍니다.
          <div style={{ margin: '2% 0 0 2%', color: 'gray' }}>
            남붕어@naver.com
          </div>
        </Div5>
        <Line />

        <Div4 className={'col-2'} />
        <Div5 className={'col-10'}>
          <Dot /> 본인인증을 위해 비밀번호를 입력해 주시기 바랍니다.
          <br />
          <input
            placeholder={'비밀번호를 입력해주세요'}
            style={{ width: '30%', margin: '2% 0 0 2%' }}
          />
        </Div5>

        <div style={{ textAlign: 'center' }}>
          <CheckBtn>회원탈퇴</CheckBtn>
        </div>
      </div>

      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
