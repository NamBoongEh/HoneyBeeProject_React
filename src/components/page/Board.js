import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Tag = styled.button`
  border: 4px solid rgb(48, 27, 1);
  border-radius: 30px;
  padding: 1% 1.25%;
  background-color: white;
  transform: translateY(40%);
  margin-left: 30px;
`;
const Tag2 = styled.button`
  border: 4px solid rgb(48, 27, 1);
  border-radius: 30px;
  padding: 1% 2.5%;
  background-color: white;
  transform: translateY(40%);
  margin-left: 30px;
`;

const CardBox = styled.div`
  border: 1px solid rgb(48, 27, 1);
  height: 380px;
  width: 19%;
  margin: 1% 0.5%;
  &:hover {
    cursor: pointer;
    border: 1px solid rgb(250, 176, 24);
  }
`;

const Image = styled.div`
  border: 1px solid black;
  width: 86%;
  height: 50%;
  margin: 7% 7%;
`;
const Name = styled.div`
  border: 1px solid black;
  width: 86%;
  height: 20%;
  margin: 0px 7% 7%;
`;
const Cost = styled.div`
  border: 1px solid black;
  height: auto;
  width: 21%;
  margin-left: 7%;
`;
const Date = styled.div`
  border: 1px solid black;
  height: auto;
  width: 65%;
  margin-right: 7%;
  text-align: right;
`;

export default function Board(props) {
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
        <h3 style={{ marginBottom: '2%' }}>상세검색</h3>
        <div
          className={'container-fluid'}
          style={{
            height: '110px',
            backgroundColor: 'rgb(246,218,66)',
            borderRadius: '20px',
          }}
        >
          <Tag>카테고리</Tag>
          <Tag2>지역 </Tag2>
          <Tag2>비용 </Tag2>
          <Tag2>시간 </Tag2>
          <Tag2
            style={{
              padding: '0.8% 2.2%',
              backgroundColor: 'rgb(249,130,15)',
              border: '4px solid rgb(249,130,15)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'larger',
            }}
          >
            검색{' '}
          </Tag2>
          <div
            style={{ transform: 'translate(54%, -70%)', fontSize: 'larger' }}
          >
            <input type={'checkbox'} style={{ zoom: '1.5' }} /> 마감된 모임 포함
          </div>
        </div>

        <select
          style={{
            height: '35px',
            width: '8%',
            fontSize: 'smaller',
            margin: '2% 0 2%',
          }}
        >
          <option>게시물조회</option>
          <option value="">최신순</option>
          <option value="">인기순</option>
        </select>
        <div style={{ display: 'flex' }}>
          <CardBox>
            <Image>개쩌는 이미지</Image>
            <Name>이름을 길게쓰면 두줄로 나올지 모르겠지만 일단</Name>
            <div style={{ display: 'flex' }}>
              <Cost>유료</Cost>
              <Date>01-01 ~ 12-31</Date>
            </div>
          </CardBox>
          <CardBox></CardBox>
          <CardBox></CardBox>
          <CardBox></CardBox>
          <CardBox></CardBox>
        </div>
      </div>

      <div
        className={'col-1'}
        style={{ width: '100%', backgroundColor: 'rgb(246,218,66)' }}
      />
    </div>
  );
}
