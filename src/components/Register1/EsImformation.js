import React, { useState } from 'react';
import styled from 'styled-components';

const InputBar = styled.input`
  width: 45%;
  height: 8%;
  border-radius: 25px;
  border: none;
  padding-left: 15px;
  background-color: #eeeeee;
  font-size: medium;
  &:focus {
    outline: none;
  }
`;

const DoubleCheck = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #bbbbbb;
  width: 27%;
  height: 6.5%;
  line-height: normal;
`;

export default function EsImformation() {
  const [list, setList] = useState(['']);
  const yearList = { years: [] };
  const dayList = { days: [] };

  const IterationYear = () => {
    for (let i = 1900; i <= 2021; i++) {
      yearList.years = [...yearList.years, i];
    }
    const nameList = yearList.years.map((name) => (
      <option key={name}>{name}</option>
    ));

    return <select>{nameList}</select>;
  };

  const IterationMonth = () => {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const monthList = month.map((m) => <option key={m}>{m}</option>);

    return <select>{monthList}</select>;
  };

  const IterationDay = () => {
    for (let i = 1; i <= 31; i++) {
      dayList.days = [...dayList.days, i];
    }
    const nameList = dayList.days.map((name) => (
      <option key={name}>{name}</option>
    ));

    return <select>{nameList}</select>;
  };

  const onChangeHandler = (e) => {
    console.log(e.target);
    console.log(e.target.value);

    if (
      e.target.value === ''
        ? setList(() => [{ value: e.target.value, readOnly: false }])
        : setList(() => [{ value: e.target.value, readOnly: true }])
    );
  };

  return (
    <div>
      <h3 style={{ fontWeight: 'bold' }}>회원가입</h3>
      <h3 style={{ fontWeight: 'bold', color: '#4B89DC', paddingTop: '40px' }}>
        필수정보
      </h3>
      <div class="row" style={{ paddingBottom: '30px' }}>
        <div
          className={'col-3'}
          style={{
            fontSize: 'x-large',
            fontWeight: 'bold',
            lineHeight: '5rem',
          }}
        >
          아이디(이메일)
          <br />
          <br />
          비밀번호
          <br />
          이름
          <br />
          닉네임
          <br />
          생년월일
          <br />
        </div>
        <div
          className={'col-9'}
          style={{
            fontSize: 'larger',
            lineHeight: '5rem',
          }}
        >
          <InputBar style={{ width: '30%' }} /> @{' '}
          {list.map((c) => (
            <InputBar
              style={{ width: '30%' }}
              placeholder={c.value}
              readOnly={c.readOnly}
            />
          ))}
          <select onChange={(e) => onChangeHandler(e)} name={'email'}>
            <option value="select">이메일 선택</option>
            <option value="gmail.com">gmail.com</option>
            <option value="kakao.com">kakao.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="daum.net">daum.net</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="korea.com">korea.com</option>
            <option value="naver.com">naver.com</option>
            <option value="nate.com">nate.com</option>
            <option value="">직접 입력하기</option>
          </select>
          <br />
          <DoubleCheck>이메일 중복 체크</DoubleCheck>
          <br />
          <InputBar placeholder={'비밀번호를 입력해주세요'} />
          <br />
          <InputBar placeholder={'이름을 입력해주세요'} />
          <br />
          <InputBar placeholder={'닉네임을 입력해주세요'} />
          <DoubleCheck style={{ width: '20%', marginLeft: '5%' }}>
            중복확인
          </DoubleCheck>
          <br />
          <div>
            <IterationYear />
            년도
            <IterationMonth />월
            <IterationDay />일
          </div>
        </div>
      </div>
    </div>
  );
}
