import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Links = styled(Link)`
  float: right;
  font-size: smaller;
  color: slategray;
  text-decoration: underline;
  margin-right: 10px;
  line-height: 50px;
  &:hover {
    color: slategray;
  }
`;

export default function Register2() {
  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <div
        className={'container'}
        style={{
          backgroundColor: 'white',
          padding: '40px 40px 60px 40px',
          height: '50%',
          width: '50%',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <h3 style={{ fontWeight: 'bold' }}>회원가입</h3>
        <h4
          style={{
            fontWeight: 'bold',
            color: '#4B89DC',
            paddingTop: '70px',
            marginLeft: '70px',
          }}
        >
          이용약관 / 개인정보 수집 및 이용 동의
        </h4>
        <div
          className={'container'}
          style={{
            backgroundColor: '#DDDDDD',
            width: '85%',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
          >
            <label for={'all'}>
              <input id={'all'} type={'checkbox'} /> 전체동의
            </label>
          </div>
        </div>
        <div
          className={'container'}
          style={{
            borderWidth: '1px',
            borderColor: '#DDDDDD',
            borderStyle: 'solid',
            width: '85%',
            lineHeight: '300%',
          }}
        >
          <div
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
          >
            <label htmlFor={'check1'}>
              <input id={'check1'} type={'checkbox'} /> (필수) 만 14세
              이상입니다.
            </label>
            <br />
            <label htmlFor={'check2'}>
              <input id={'check2'} type={'checkbox'} /> (필수) 이용약관 동의
            </label>
            <Links to={'tos'}>내용보기</Links>
            <br />
            <label htmlFor={'check3'}>
              <input id={'check3'} type={'checkbox'} />
              (필수) 개인정보 수집 및 이용 동의
            </label>
            <Links to={'tos'}>내용보기</Links>
            <br />
            <label htmlFor={'check4'}>
              <input id={'check4'} type={'checkbox'} /> (선택) 이메일 수신
            </label>
            <br />
          </div>
          <div style={{ fontSize: '13px', color: 'gray' }}>
            단, 모임 참여와 관련된 정보는 수신동의 여부 관계없이 발송됩니다.
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          <Link to="./Register">
            <button
              style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                fontSize: '18px',
                padding: '10px 20px 10px 20px',
                borderRadius: '10px',
              }}
            >
              회원가입 완료
            </button>
          </Link>
          <br />
        </div>
        <div style={{ paddingTop: '50px' }}>
          <Link to="./Register1">
            <button
              style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                fontSize: '18px',
                padding: '10px 20px 10px 20px',
                borderRadius: '10px',
              }}
            >
              뒤로가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
