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
    console.log(e.target.value);
    if (e.target.value === 'on') {
      setHobby((prev) => [...prev, { id: e.target.id }]);
    }
  };

  useEffect(() => {
    console.log(hobby);
  }, [hobby]);

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
            <HobbyButton>{c.id}</HobbyButton>
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
                  <input id={'exhibition'} type={'checkbox'} /> 전시/박람회
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
      <div style={{ paddingTop: '60px' }} />
    </div>
  );
}
