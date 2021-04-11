import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import PageButton from '../search/PageButton';

const Table = styled.table`
  width: 100%;
  margin: 1.2% 0;
`;

const Tr1 = styled.tr`
  height: 3rem;
  text-align: center;
  font-size: large;
`;

const Tr2 = styled.tr`
  height: 3rem;
  & > * {
    border: 1px solid rgb(48, 27, 1);
  }
`;

const Th1 = styled.th`
  width: 8%;
  color: white;
  background-color: rgb(48, 27, 1);
`;
const Th2 = styled.th`
  color: white;
  background-color: rgb(48, 27, 1);
`;
const Th3 = styled.th`
  width: 13%;
  color: white;
  background-color: rgb(48, 27, 1);
`;
const Th4 = styled.th`
  width: 9%;
  color: white;
  background-color: rgb(48, 27, 1);
`;

const Td1 = styled.td`
  text-align: center;
  font-size: smaller;
`;
const Td2 = styled.td`
  padding: 0.5% 0.5%;
  font-size: large;
`;
const Td3 = styled.td`
  text-align: center;
  font-size: smaller;
`;
const Td4 = styled.td`
  text-align: center;
  font-size: smaller;
`;

export default function FreeBoard(props) {
  return (
    <>
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
          <select
            style={{
              height: '35px',
              width: '8%',
              fontSize: 'smaller',
            }}
          >
            <option>게시물조회</option>
            <option value="">최신순</option>
            <option value="">인기순</option>
          </select>

          <Table>
            <Tr1>
              <Th1>번호</Th1>
              <Th2>제목</Th2>
              <Th3>작성자</Th3>
              <Th4>작성시간</Th4>
            </Tr1>
            <Tr2>
              <Td1>1</Td1>
              <Td2>
                <Link to={'./FreeBoardRead'}>
                  조장 놀린 썰 푼다람쥐며느리 아니 치킨 개먹고싶네 뿌링클은 절대
                  순살로 먹지마세요 뿌링클집안에 순살은 쓰레기 닭으로 써서 완전
                  품질안좋아요 그래서 나는 동네 치킨 먹지요 동네치킨 개 큼 진짜
                  어디 브라질산 닭 모셔왔냐고 개기쁘다 근데 떡들어있는 닭강정도
                  먹고싶네
                </Link>
              </Td2>
              <Td3>김세훈남소연이향일구리다이다현</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
            <Tr2>
              <Td1>1</Td1>
              <Td2>조장 놀린 썰 푼다</Td2>
              <Td3>김세훈</Td3>
              <Td4>18:31</Td4>
            </Tr2>
          </Table>
          <div style={{ lineHeight: 'center' }}>
            <select
              style={{
                height: '38px',
                width: '8%',
                fontSize: 'smaller',
              }}
            >
              <option>게시물조회</option>
              <option value="">제목</option>
              <option value="">작성자</option>
              <option value="">내용</option>
            </select>

            <input
              placeholder={'내용을 입력해주세요'}
              style={{ width: '67%', height: '38px', marginLeft: '2%' }}
            />

            <button
              style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                padding: '8px 23px',
                borderRadius: '13px',
                marginLeft: '2%',
              }}
            >
              검색
            </button>

            <Link to={'./FreeBoardWrite'}>
              <button
                style={{
                  float: 'right',
                  backgroundColor: 'rgb(48,27,1)',
                  color: 'white',
                  border: 'none',
                  padding: '8px 25px',
                  borderRadius: '13px',
                  marginRight: '0.5%',
                }}
              >
                글쓰기
              </button>
            </Link>

            <br />
          </div>

          <PageButton />
        </div>
        <div
          className={'col-1'}
          style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
        />
      </div>
    </>
  );
}
