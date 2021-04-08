import React from 'react';
import styled from 'styled-components';
import { PersonBadge, Dot, CircleFill } from 'react-bootstrap-icons';

const Green = styled(CircleFill)`
  color: limegreen;
`;

const Yellow = styled(CircleFill)`
  color: gold;
`;

const Red = styled(CircleFill)`
  color: red;
`;

const Gray = styled(CircleFill)`
  color: gray;
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
  display: inline-block;
  width: 100%;
  margin-top: 1%;
  padding-left: 6%;
  &:hover {
    cursor: pointer;
  }
`;

const Div5 = styled.div`
  width: 100%;
  display: inline-block;
`;

const Line = styled.hr`
  margin: 2.5% 0 2.5%;
  background: lightgray;
`;

const Line2 = styled.hr`
  margin: 1% 0;
  background: black;
`;

const Left = styled.div`
  border: 1px solid black;
  display: inline-block;
  height: 300px;
  margin-bottom: 10%;
`;

const Right = styled.div`
  display: inline-block;
  padding-left: 5%;
  padding-right: 3%;
  height: 300px;
  margin-bottom: 10%;
`;

export default function MyPage(props) {
  return (
    <div className="row">
      <div
        className={'col-md-1'}
        style={{ backgroundColor: 'rgb(246,218,66)' }}
      />
      <div
        className={'col-md-10'}
        style={{
          padding: '5% 4%',
          fontSize: 'larger',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Left className={'col-3'}>
            이미지를 대빵 크게 넣을것인가는 고민해보자.
          </Left>
          <Right className={'col-9'}>
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
            <Line
              style={{
                width: '27%',
              }}
            />
            <Div2 className={'col-2'}>이메일</Div2>
            <Div3 className={'col-10'}>남붕어@naver.com</Div3>
            <Div2 className={'col-2'}>휴대전화</Div2>
            <Div3 className={'col-10'}>010-0000-0000</Div3>
            <Div2 className={'col-2'}>가입일</Div2>
            <Div3 className={'col-10'}>1993-09-16</Div3>
            <Div2 className={'col-2'}>홈페이지</Div2>
            <Div3 className={'col-10'}>github/남붕어</Div3>
          </Right>
        </div>

        <Div3 className={'col-6'}>
          <div
            style={{
              display: 'inline',
              fontWeight: 'bold',
              fontSize: 'x-large',
            }}
          >
            모임 신청 목록
          </div>
          <Line />

          <Div5
            style={{ overflow: 'auto', height: '300px', marginBottom: '5%' }}
          >
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 승인완료 <Green />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>파주/일산 자바의 정석 스터디 구합니다</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 승인대기 <Yellow />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트2</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 승인거절 <Red />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트3</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 승인거절 <Red />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트3</Div4>
              <Line2 />
            </div>
          </Div5>

          <div
            style={{
              display: 'inline',
              fontWeight: 'bold',
              fontSize: 'x-large',
            }}
          >
            모임 개설 목록
            <Button
              style={{ padding: '0 1.5%', backgroundColor: 'rgb(178,114,8)' }}
            >
              더보기
            </Button>
          </div>
          <Line />

          <Div5
            style={{ overflow: 'auto', height: '300px', marginBottom: '5%' }}
          >
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집중 <Green />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>일본어 스터디 구합니다</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집중지 <Yellow />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트2</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집취소 <Red />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트3</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집종료 <Gray />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트3</Div4>
              <Line2 />
            </div>
          </Div5>
        </Div3>

        <Div3 className={'col-6'}>
          <div
            style={{
              display: 'inline',
              fontWeight: 'bold',
              fontSize: 'x-large',
            }}
          >
            모임 찜 목록
          </div>
          <Line />

          <Div5
            style={{ overflow: 'auto', height: '712px', marginBottom: '5%' }}
          >
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집중 <Green />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>일본어 스터디 구합니다</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집중지 <Yellow />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트2</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집취소 <Red />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트3</Div4>
              <Line2 />
            </div>
            <div>
              <Div5 className={'col-3'}>
                <Dot /> 모집종료 <Gray />
              </Div5>
              <Div5 className={'col-9'} style={{ textAlign: 'right' }}>
                2021-01-01 11:11
              </Div5>
              <Div4>테스트3</Div4>
              <Line2 />
            </div>
          </Div5>
        </Div3>
      </div>

      <div
        className={'col-md-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
