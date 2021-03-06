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
        ??????/?????????
        <Box1 style={{ margin: '2% 0 2% 0' }}>
          ????????? ??????????????? ??????
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
            ?????????
          </button>
          <hr style={{ backgroundColor: 'grey', margin: '1% 0% 1%' }} />
        </Box1>
        <ThumbNail>????????? ?????????</ThumbNail>
        <Table>
          <Tr1>
            <Th1>
              <Dot />
              ????????????
            </Th1>
            <Th2>2021.09.16 ~ 2021.09.16</Th2>
          </Tr1>
          <Tr1>
            <Th1>
              <Dot />
              ????????????
            </Th1>
            <Th2>
              ?????? ????????? ?????? 69 ymca?????? 7??? ?????? ??? ????????? ?????????
              ?????????????????? ????????????????????????
            </Th2>
          </Tr1>
          <Tr1>
            <Th1>
              <Dot />
              ????????????
            </Th1>
            <Th2>????????????</Th2>
          </Tr1>
          <Tr1>
            <Th1>
              <Dot />
              ????????????
            </Th1>
            <Th2>6???</Th2>
          </Tr1>
        </Table>
        <Button>????????????</Button>
        <Button>????????????</Button>
        <Box1 style={{ margin: '0 0 2% 0', transform: 'translateY(-180px)' }}>
          ?????? ?????? ??????
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
              <Th1T2 style={{ fontWeight: 'bold' }}>????????? ??????</Th1T2>
              <Th2T2 />
              <Th3T2 style={{ fontWeight: 'bold' }}>???????????? ?????? ??????</Th3T2>
            </Tr1T2>
            <Tr1T2>
              <Th1T2 />
              <Th2T2>?????? : ?????????</Th2T2>
              <Th2T2>
                <Dot />
                <Link href={'home'}>2015 ?????? ?????? ????????????!</Link>
              </Th2T2>
            </Tr1T2>
            <Tr1T2>
              <Th1T2 />
              <Th2T2>????????? : ?????????@naver.com</Th2T2>
              <Th2T2>
                <Dot />
                <Link href={'home'}>
                  ?????? ???????????? ????????? 3?????? ?????????. ?????? ?????? ?????????^???^;;
                </Link>
              </Th2T2>
            </Tr1T2>
            <Tr1T2>
              <Th1T2 />
              <Th2T2>
                ????????? ?????? <Starfill />
                <Starfill />
                <Starhalf />
                <Stars />
                <Stars />
              </Th2T2>
              <Th2T2>
                <Dot />
                <Link href={'home'}> 2015 ?????? ?????? ????????????!</Link>
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
            ????????? ??????
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
