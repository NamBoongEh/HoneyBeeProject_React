import React, { useState } from 'react';
import styled from 'styled-components';

const InputBar = styled.input`
  width: 30%;
  height: 45px;
  border-radius: 10px;
  border: none;
  padding-left: 18px;
  background-color: #eeeeee;
  margin: 20px 0;
  font-size: medium;
  &:focus {
    outline: none;
  }
`;

const SelectBar = styled.select`
  width: 20%;
  height: 45px;
  border-radius: 10px;
  border: none;
  padding-left: 30px;
  background-color: #eeeeee;
  margin: 20px 0;
  font-size: medium;
  &:focus {
    outline: none;
  }
`;

const DoubleCheck = styled.button`
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  width: 14%;
  height: 44px;
  margin-left: 10px;
`;

const CheckResult = styled.div`
  margin: -10px 0 0 15px;
`;

const Text = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin: 0 5px;
`;

export default function EsImformation() {
  const [email2, setEmail2List] = useState(['']);
  const [nick, nickList] = useState('');
  const [email, emailList] = useState('');
  const [id, idList] = useState('');
  const yearList = { years: [] };
  const dayList = { days: [] };
  const [iDConfirm, setIdConfirm] = useState('');
  const [nickConfirm, setNickConfirm] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');

  // 생년월일 년도,월,일 생성 이벤트 시작
  const IterationYear = () => {
    for (let i = 1900; i <= 2021; i++) {
      yearList.years = [...yearList.years, i];
    }
    const nameList = yearList.years.map((name) => (
      <option key={name}>{name}</option>
    ));

    return (
      <SelectBar style={{ width: '11%', paddingLeft: '10px' }}>
        {nameList}
      </SelectBar>
    );
  };

  const IterationMonth = () => {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const monthList = month.map((m) => <option key={m}>{m}</option>);

    return (
      <SelectBar style={{ width: '10%', paddingLeft: '10px' }}>
        {monthList}
      </SelectBar>
    );
  };

  const IterationDay = () => {
    for (let i = 1; i <= 31; i++) {
      dayList.days = [...dayList.days, i];
    }
    const nameList = dayList.days.map((name) => (
      <option key={name}>{name}</option>
    ));

    return (
      <SelectBar style={{ width: '10%', paddingLeft: '10px' }}>
        {nameList}
      </SelectBar>
    );
  };
  // 생년월일 년도,월,일 생성 이벤트 끝

  // 아이디 중복확인 이벤트 시작
  const idCheckHandler = (e) => {
    idList(e.target.value);
  };

  const idCheck = () => {
    if (id === '') setIdConfirm('ID를 입력해주세요');
    else if (id === 'nam') setIdConfirm(id + '은 사용할 수 있습니다');
    else setIdConfirm(id + '은 사용할 수 없습니다');
  };
  // 아이디 중복 이벤트 끝

  // 이메일 선택 이벤트 시작
  const emailChangeHandler2 = (e) => {
    e.target.value === ''
      ? setEmail2List(() => [{ value: e.target.value, readOnly: false }])
      : setEmail2List(() => [{ value: e.target.value, readOnly: true }]);
  };
  // 이메일 선택 이벤트 끝

  // 이메일 중복 이벤트 시작
  const emailChangeHandler1 = (e) => {
    emailList(e.target.value);
  };

  const emailCheck = () => {
    if (email === '' || email2[0].value === '')
      setEmailConfirm('E-mail를 입력해주세요');
    else if (email === 'nam' && email2[0].value === 'naver.com')
      setEmailConfirm(email + '@' + email2[0].value + '은 사용할 수 있습니다');
    else if (email !== '' && email2[0].value !== '')
      setEmailConfirm(email + '@' + email2[0].value + '은 사용할 수 없습니다');
  };
  // 이메일 중복 이벤트 끝

  // 닉네임 중복확인 이벤트 시작
  const nickCheckHandler = (e) => {
    nickList(e.target.value);
  };

  const nickCheck = () => {
    if (nick === '') setNickConfirm('닉네임을 입력해주세요');
    else if (nick === '남붕어') setNickConfirm(nick + '은 사용할 수 있습니다');
    else setNickConfirm(nick + '은 사용할 수 없습니다');
  };
  // 닉네임 중복 이벤트 끝

  return (
    <>
      <h3 style={{ fontWeight: 'bold' }}>회원가입</h3>
      <h3 style={{ fontWeight: 'bold', color: '#4B89DC', paddingTop: '40px' }}>
        필수정보
      </h3>
      {/* 아이디 */}
      <InputBar onChange={(e) => idCheckHandler(e)} placeholder={'ID'} />
      <DoubleCheck onClick={() => idCheck()}>중복 확인</DoubleCheck>
      <CheckResult>{iDConfirm}</CheckResult>
      {/* 이메일 */}
      <InputBar
        style={{ width: '20%' }}
        placeholder={'E-mail'}
        onChange={(e) => emailChangeHandler1(e)}
      />
      <Text> @ </Text>
      {email2.map((c) => (
        <InputBar
          style={{ width: '20%' }}
          placeholder={c.value}
          readOnly={c.readOnly}
        />
      ))}
      <SelectBar
        onChange={(e) => emailChangeHandler2(e)}
        name={'email'}
        style={{ marginLeft: '10px', paddingLeft: '10px' }}
      >
        <option value="이메일 선택">이메일 선택</option>
        <option value="gmail.com">gmail.com</option>
        <option value="kakao.com">kakao.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="daum.net">daum.net</option>
        <option value="hotmail.com">hotmail.com</option>
        <option value="korea.com">korea.com</option>
        <option value="naver.com">naver.com</option>
        <option value="nate.com">nate.com</option>
        <option value="">직접 입력하기</option>
      </SelectBar>
      <DoubleCheck onClick={() => emailCheck()}>중복 확인</DoubleCheck>
      <CheckResult>{emailConfirm}</CheckResult>
      {/* 비밀번호 */}
      <InputBar placeholder={'PW'} />
      <br />
      {/* 이름 */}
      <InputBar placeholder={'Name'} />
      <br />
      {/* 닉네임 */}
      <InputBar
        onChange={(e) => nickCheckHandler(e)}
        placeholder={'NickName'}
      />
      <DoubleCheck onClick={() => nickCheck()}>중복 확인</DoubleCheck>
      <CheckResult>{nickConfirm}</CheckResult>
      {/* 생년월일 */}
      <div>
        <Text>생년월일</Text>
        <IterationYear />
        <Text>년도</Text>
        <IterationMonth />
        <Text>월</Text>
        <IterationDay />
        <Text>일</Text>
      </div>
    </>
  );
}
