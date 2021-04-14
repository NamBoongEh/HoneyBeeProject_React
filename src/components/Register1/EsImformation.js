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
  const [email2, setEmail2List] = useState(['']);
  const [nick, nickList] = useState('');
  const [email, emailList] = useState('');
  const yearList = { years: [] };
  const dayList = { days: [] };
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
  // 생년월일 년도,월,일 생성 이벤트 끝

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
    console.log(email);
    console.log(email2[0].value);
    setEmailConfirm(
      email === 'aaa' && email2[0].value === 'naver.com'
        ? email + '@' + email2[0].value + '는 사용 할 수 있습니다.'
        : email + '@' + email2[0].value + '는 사용 할 수 없습니다.'
    );
  };
  // 이메일 중복 이벤트 끝

  // 닉네임 중복확인 이벤트 시작
  const nickCheckHandler = (e) => {
    nickList(e.target.value);
  };

  const nickCheck = () => {
    setNickConfirm(
      nick === '남붕어'
        ? nick + '은 사용할 수 있습니다.'
        : nick + '은 사용할 수 없습니다.'
    );
  };
  // 닉네임 중복 이벤트 끝

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
          아이디
          <br />
          이메일
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
          <InputBar />
          <br />
          <InputBar
            style={{ width: '30%' }}
            onChange={(e) => emailChangeHandler1(e)}
          />{' '}
          @{' '}
          {email2.map((c) => (
            <InputBar
              style={{ width: '30%' }}
              placeholder={c.value}
              readOnly={c.readOnly}
            />
          ))}
          <select onChange={(e) => emailChangeHandler2(e)} name={'email'}>
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
          </select>
          <br />
          <div>{emailConfirm}</div>
          <DoubleCheck onClick={() => emailCheck()}>
            이메일 중복 체크
          </DoubleCheck>
          <br />
          <InputBar placeholder={'비밀번호를 입력해주세요'} />
          <br />
          <InputBar placeholder={'이름을 입력해주세요'} />
          <br />
          <InputBar
            onChange={(e) => nickCheckHandler(e)}
            placeholder={'닉네임을 입력해주세요'}
          />
          <DoubleCheck
            style={{ width: '20%', marginLeft: '5%' }}
            onClick={() => nickCheck()}
          >
            중복확인
          </DoubleCheck>
          <div>{nickConfirm}</div>
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
