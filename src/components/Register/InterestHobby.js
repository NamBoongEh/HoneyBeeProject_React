import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  height: 100%;
  line-height: 2.5rem;
  padding-top: 10px;
`;

const HobbyButton = styled.button`
  width: 30%;
  border-radius: 25px;
  border: none;
  background-color: lemonchiffon;
  text-align: center;
  line-height: 2.5rem;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
`;

const LeftBox = styled.div`
  font-size: x-large;
  font-weight: bold;
`;

export default function InterestHobby() {
  const [hobby, setHobby] = useState([]);

  // 모임 선택 이벤트 시작
  const onClickHandler = (e) => {
    if (e.target.checked === true) {
      setHobby((prev) => [...prev, { id: e.target.id }]);
    } else {
      removeHobby(e.target.id);
    }
  };

  useEffect(() => {
    console.log(hobby);
  }, [hobby]);
  // 모임 선택 이벤트 종료

  // 선택 모임 지우는 이벤트 시작
  const removeHobby = (id) => {
    const nextNames = hobby.filter((name) => name.id !== id);

    setHobby(nextNames);
  };
  // 선택 모임 지우는 이벤트 종료

  return (
    <div>
      <div className="row">
        <LeftBox className={'col-3'}>관심 모임</LeftBox>

        <div className={'col-9'}>
          {hobby.map((c) => (
            <HobbyButton key={c.id} onClick={() => removeHobby(c.id)}>
              {c.id}
            </HobbyButton>
          ))}
        </div>
      </div>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className={'col-3'} />
        <div className={'col-9'}>
          <Table>
            <tr>
              <td>
                <label for={'education'}>
                  <input
                    id={'교육'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />
                  교육
                </label>
              </td>
              <td>
                <label for={'seminar'}>
                  <input
                    id={'세미나/컨퍼런스'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />
                  세미나/컨퍼런스
                </label>
              </td>
              <td>
                <label for={'lecture'}>
                  <input
                    id={'강연'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  강연
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label for={'hobby'}>
                  <input
                    id={'취미/소모임'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  취미/소모임
                </label>
              </td>
              <td>
                <label for={'art'}>
                  <input
                    id={'문화/예술/방송'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  문화/예술/방송
                </label>
              </td>
              <td>
                <label for={'competition'}>
                  <input
                    id={'공모전'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  공모전
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label for={'exhibition'}>
                  <input
                    id={'전시/박람회'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  전시/박람회
                </label>
              </td>
              <td>
                <label for={'event'}>
                  <input
                    id={'이벤트/파티'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  이벤트/파티
                </label>
              </td>
              <td>
                <label for={'beauty'}>
                  <input
                    id={'패션/뷰티'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  패션/뷰티
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label for={'ect'}>
                  <input
                    id={'기타'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
                  기타
                </label>
              </td>
            </tr>
          </Table>
        </div>
      </div>
      <div style={{ paddingTop: '60px' }} />
    </div>
  );
}
