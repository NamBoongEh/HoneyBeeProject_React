import React, { useState } from 'react';
import styled from 'styled-components';
import { DashSquareFill, PlusSquareFill } from 'react-bootstrap-icons';

const SelectBar = styled.select`
  height: 30px;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
  background-color: #eeeeee;
  margin: 10px 5px;
  &:focus {
    outline: none;
  }
`;

const More = styled.button`
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  width: 14%;
  height: 31px;
  margin-left: 10px;
`;

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

const ContainerTitle = styled.div`
  background-color: #dddddd;
  width: 145%;
  font-size: 17px;
  font-weight: bold;
  padding: 4px 0 4px 15px;
`;

const ContainerContent = styled.div`
  border: 1px solid #dddddd;
  width: 145%;
  float: left;
  padding: 20px;
`;

export default function InterestArea() {
  const [list, setList] = useState([]);
  const [city, setCity] = useState({ city: '', dist: '' });

  // 관심 지역 '시,도 선택'과 '구,군선택' 클릭 시 위에 노란색 선택한거 뜨는 이벤트 시작
  const onClickHandler = () => {
    if (
      city.city !== '' &&
      city.dist !== '' &&
      city.city !== '시,도 선택' &&
      city.dist !== '구,군 선택'
    ) {
      setList((p) => [city]);
    }
    console.log(list);
  };

  const onChangeHandler = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setCity((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  // 관심 지역 '시,도 선택'과 '구,군선택' 클릭 시 위에 노란색 선택한거 뜨는 이벤트 종료

  // eslint-disable-next-line no-shadow
  const removeArea = (city, dist) => {
    const nextNames = list.filter(
      (name) => name.city + name.dist !== city + dist
    );

    setList(nextNames);
  };

  return (
    <div style={{ margin: '50px 0' }}>
      <div className="row" style={{ marginTop: '20px' }}>
        <LeftBox className={'col-3'}>관심 지역</LeftBox>
        <div className={'col-9'}>
          {list.map((c) => (
            <HobbyButton
              onClick={() => removeArea(c.city, c.dist)}
              key={c.city + ' / ' + c.dist}
            >
              {c.city + ' / ' + c.dist}
            </HobbyButton>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <div className="row">
          <div className={'col-3'} />
          <div>
            <ContainerTitle>관심 지역 선택</ContainerTitle>
            <ContainerContent className={'container'}>
              <Plus />
              <Minus />
              <SelectBar onChange={(e) => onChangeHandler(e)} name={'city'}>
                <option>시,도 선택</option>
                <option>서울시</option>
                <option>제주도</option>
              </SelectBar>
              <SelectBar onChange={(e) => onChangeHandler(e)} name={'dist'}>
                <option>구,군 선택</option>
                <option>광명시</option>
                <option>구리시</option>
              </SelectBar>
              <More onClick={() => onClickHandler()}>추가</More>
              <br />
            </ContainerContent>
          </div>
        </div>
      </div>
    </div>
  );
}
