import React from 'react';
import styled from 'styled-components';
import { ArrowReturnRight } from 'react-bootstrap-icons';

const Right = styled(ArrowReturnRight)`
  font-size: 35px;
  margin-left: 5%;
  margin-right: 1%;
`;

const Reply = styled.textarea`
  resize: none;
  width: 100%;
  border-radius: 15px;
  border: none;
  background-color: rgb(246, 218, 66);
  padding: 0.3% 10%;

  &:focus {
    outline: none;
  }
`;

const Name = styled.button`
  position: absolute;
  padding-right: 1%;
  border: none;
  border-right: 1px;
  border-right-style: solid;
  border-right-color: black;
  background-color: rgb(246, 218, 66);
  transform: translate(110%, 20%);
  font-size: large;
  font-weight: bold;
  width: 7.5%;
`;

const Re = styled.button`
  position: absolute;
  border: none;
  background-color: rgb(246, 218, 66);
  transform: translate(3850%, 20%);
  font-size: large;
  font-weight: bold;
`;
const Report = styled.button`
  position: absolute;
  border: none;
  background-color: rgb(246, 218, 66);
  transform: translate(3720%, 20%);
  font-size: large;
  font-weight: bold;
`;

export default function rereply1() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Right />
        <Name>개쩌는 아이디</Name>
        <Reply
          value={
            'ㅎㅇㄴㅁ허냉푸ㅑㅐㅂㄷㅈ거지ㅜ은파유ㅗㅓㅑㄷ개ㅏㅣㅡㅈ나ㅝㅍ애ㅑㅓㅈ디ㅡㅂㅁㄴㅇ퍄ㄴ에ㅑㅠㅐㅞㅐㅏㅊ마내ㅑㅗㅠㅕㅑㄷㅎ가즤우ㅏ퍼ㅑㅗㅠ햐ㅐ핵데ㅣㅇ;니ㅡㅏ푸 ㅑㅗㅑㅓㅐㅎ갇제ㅣㅢㅇㄴ차ㅜ포ㅠㅑ얗ㄷ개ㅔ지;ㅇㄴ,츠풀햐개데진ㅁ;ㅌ,츠퓨ㅓㅗㅑㅂ대ㅔ지;ㄴㅁ,차퓨러ㅑㄷ개ㅔ러ㅐㅏㄷ지브ㅏㄴㅁ'
          }
          readOnly={'ReadOnly'}
        />
        <Report>신고</Report>
        <Re>답글</Re>
      </div>
      <div
        style={{
          textAlign: 'right',
          marginRight: '1.5%',
          marginBottom: '1%',
        }}
      >
        2021.03.22 13:13:13
      </div>
    </>
  );
}
