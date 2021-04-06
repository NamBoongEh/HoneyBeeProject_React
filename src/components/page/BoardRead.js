import React from 'react';
import styled from 'styled-components';
import {
  Dot,
  Star,
  StarFill,
  StarHalf,
  PersonCircle,
} from 'react-bootstrap-icons';

const Box1 = styled.div`
  width: 100%;
  height: 42px;
  font-weight: bold;
`;

const ThumbNail = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 200px;
`;

const Table = styled.table`
  width: 85%;
  height: 200px;
  margin: 1.2% 0 0 0;
  transform: translate(222px, -218px);
`;

const Tr1 = styled.tr`
  height: 3rem;
  & > * {
    font-weight: normal;
    font-size: smaller;
  }
`;

const Th1 = styled.th`
  width: 10%;
  color: rgb(246, 218, 66);
  background-color: rgb(48, 27, 1);
  padding-left: 1%;
`;
const Th2 = styled.th`
  color: rgb(246, 218, 66);
  background-color: rgb(48, 27, 1);
  padding-left: 2%;
`;

const Button = styled.button`
  float: right;
  margin-right: 2%;
  background-color: rgb(246, 218, 66);
  border: none;
  border-radius: 5px;
  padding: 0.5% 1.5%;
  transform: translate(15px, -280px);
`;

const Table2 = styled.table`
  width: 100%;
  margin-left: 0.5%;
  margin-right: 0.5%;
`;

const Tr1T2 = styled.tr`
  height: 2.5rem;
  & > * {
    font-weight: normal;
  }
`;

const Th1T2 = styled.th`
  width: 12%;
  padding-left: 1%;
`;
const Th2T2 = styled.th`
  width: 30%;
  padding-left: 2%;
`;
const Th3T2 = styled.th`
  width: 58%;
  padding-left: 2%;
`;

const Starfill = styled(StarFill)`
  font-size: x-large;
  color: red;
`;
const Starhalf = styled(StarHalf)`
  font-size: x-large;
  color: red;
`;
const Stars = styled(Star)`
  font-size: x-large;
  color: red;
`;

const Link = styled.a`
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function BoardRead(props) {
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
        무료/스터디
        <Box1 style={{ margin: '2% 0 2% 0' }}>
          핵쩌는 모임게시판 제목
          <button
            to={'mypage'}
            style={{
              marginRight: '1%',
              backgroundColor: 'white',
              border: 'none',
              float: 'right',
            }}
          >
            <PersonCircle />
            남붕어
          </button>
          <hr style={{ backgroundColor: 'grey', margin: '1% 0% 1%' }} />
        </Box1>
        <ThumbNail>개쩌는 썸네일</ThumbNail>
        <Table>
          <Tr1>
            <Th1>
              <Dot />
              모임기간
            </Th1>
            <Th2>2021.09.16 ~ 2021.09.16</Th2>
          </Tr1>
          <Tr1>
            <Th1>
              <Dot />
              모임장소
            </Th1>
            <Th2>
              서울 종로구 종로 69 ymca빌딩 7층 겁나 긴 주소를 적어서
              어디까지가나 봅시다람쥐며느리
            </Th2>
          </Tr1>
          <Tr1>
            <Th1>
              <Dot />
              모집기한
            </Th1>
            <Th2>상시모집</Th2>
          </Tr1>
          <Tr1>
            <Th1>
              <Dot />
              모집인원
            </Th1>
            <Th2>6명</Th2>
          </Tr1>
        </Table>
        <Button>신청하기</Button>
        <Button>문의하기</Button>
        <Box1 style={{ margin: '0 0 2% 0', transform: 'translateY(-180px)' }}>
          모임 상세 안내
          <hr
            style={{
              backgroundColor: 'grey',
              margin: '1% 0% 1%',
            }}
          />
        </Box1>
        <ThumbNail
          style={{
            width: '100%',
            backgroundColor: 'rgb(246,218,66)',
            border: 'none',
            borderRadius: '20px',
            padding: '0.5% 3%',
            lineHeight: 'Center',
            transform: 'translateY(-180px)',
          }}
        >
          <Table2>
            <Tr1T2>
              <Th1T2 style={{ fontWeight: 'bold' }}>개설자 정보</Th1T2>
              <Th2T2 />
              <Th3T2 style={{ fontWeight: 'bold' }}>남붕어의 다른 모임</Th3T2>
            </Tr1T2>
            <Tr1T2>
              <Th1T2 />
              <Th2T2>이름 : ㅇㅇㅇ</Th2T2>
              <Th2T2>
                <Dot />
                <Link href={'home'}>2015 맥북 프로 사고싶다!</Link>
              </Th2T2>
            </Tr1T2>
            <Tr1T2>
              <Th1T2 />
              <Th2T2>이메일 : 남붕어@naver.com</Th2T2>
              <Th2T2>
                <Dot />
                <Link href={'home'}>
                  자바 절임당할 물고기 3마리 구한다. 물론 나도 절여짐^ㅠ^;;
                </Link>
              </Th2T2>
            </Tr1T2>
            <Tr1T2>
              <Th1T2 />
              <Th2T2>
                개설자 평점 <Starfill />
                <Starfill />
                <Starhalf />
                <Stars />
                <Stars />
              </Th2T2>
              <Th2T2>
                <Dot />
                <Link href={'home'}> 2015 맥북 프로 사고싶다!</Link>
              </Th2T2>
            </Tr1T2>
          </Table2>

          <ThumbNail
            style={{
              height: '120px',
              width: '120px',
              transform: 'translate(22px, -115px)',
            }}
          >
            개쩌는 모습
          </ThumbNail>
        </ThumbNail>
      </div>
      <div
        className={'col-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
