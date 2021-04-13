import React, { useState } from 'react';
import styled from 'styled-components';
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

export default function InterestArea() {
  const [list, setList] = useState([]);
  const [city, setCity] = useState({ city: '', dist: '' });

  const onClickHandler = () => {
    if (
      city.city !== '' &&
      city.dist !== '' &&
      city.city !== '시,도 선택' &&
      city.dist !== '구,군 선택'
    ) {
      setList((p) => [...p, city]);
    }
    console.log(list);
  };

  const onChangeHandler = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setCity((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // eslint-disable-next-line no-shadow
  const removeArea = (city, dist) => {
    console.log('이건 city얌' + city);
    console.log('이건 dist얌' + dist);

    const nextNames = list.filter(
      (name) => name.city !== city && name.dist !== dist
    );

    setList(nextNames);
  };

  return (
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
          {list.map((c) => (
            <HobbyButton onClick={() => removeArea(c.city, c.dist)}>
              {c.city + '/' + c.dist}
            </HobbyButton>
          ))}
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
              <select onChange={(e) => onChangeHandler(e)} name={'city'}>
                <option>시,도 선택</option>
                <option>서울시</option>
                <option>제주도</option>
              </select>{' '}
              <select onChange={(e) => onChangeHandler(e)} name={'dist'}>
                <option>구,군 선택</option>
                <option>광명시</option>
                <option>구리시</option>
              </select>
              <button onClick={() => onClickHandler()}>추가</button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
