import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import styled from 'styled-components';

const ButtonX = styled(X)`
  font-size: xx-large;
  display: inline-block;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

export default function TermsOfService() {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <button className={'btn btn-primary'} onClick={() => toggleHandler()}>
        버튼
      </button>
      {show && (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', padding: '10%' }}>
          <div
            className={'container'}
            style={{
              backgroundColor: 'white',
              padding: '25px 40px 60px 30px',
              height: '80%',
              width: '50%',
              boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.3)',
              borderWidth: '6px',
              borderColor: '#4B89DC',
              borderStyle: 'solid',
              lineHeight: '200%',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              이용약관 동의
              <ButtonX />
            </div>
            <div
              className={'container'}
              style={{
                borderWidth: '1px',
                borderColor: '#DDDDDD',
                borderStyle: 'solid',
                padding: '0 0 20px 10px',
                width: '98%',
                lineHeight: '130%',
              }}
            >
              <div
                style={{
                  color: '#4b89dc',
                  fontWeight: 'bold',
                  lineHeight: '280%',
                }}
              >
                이용약관
                <br />
              </div>
              안녕하세요
              <br />
              여기에 글을 쓸겁니다. 이걸 서명하면 당신은 노예가 되는겁니다.
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
