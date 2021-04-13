import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

export default function InterestHobby() {
  const [hobby, setHobby] = useState([]);

  const onClickHandler = (e) => {
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setHobby((prev) => [...prev, { id: e.target.id }]);
    }
  };

  useEffect(() => {
    console.log(hobby);
  }, [hobby]);

  const removeHobby = (id) => {
    const nextNames = hobby.filter((name) => name.id !== id);

    setHobby(nextNames);
  };

  return (
    <div>
      <div className="row">
        <div
          className={'col-3'}
          style={{
            fontSize: 'x-large',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          관심 주제
        </div>

        <div
          className={'col-9'}
          style={{
            fontSize: 'larger',
            lineHeight: '2.5rem',
            marginTop: '2rem',
          }}
        >
          {hobby.map((c) => (
            <HobbyButton key={c.id} onClick={() => removeHobby(c.id)}>
              {c.id}
            </HobbyButton>
          ))}
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
                    id={'교육'}
                    type={'checkbox'}
                    onClick={(e) => onClickHandler(e)}
                  />{' '}
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
          </table>
        </div>
      </div>
      <div style={{ paddingTop: '60px' }} />
    </div>
  );
}
