import React from 'react';
import styled from 'styled-components';
import send from '../images/send.jpg';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #04005e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 380px;
  background: white;
  border-radius: 2px;
`;

const AdminAuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <a href="/">
            <img
              src={send}
              alt="welcome"
              style={{ width: '49%', height: '50%' }}
            />
          </a>
          <br />
          달콤한 꿀같은 모임에 빠져보세요
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AdminAuthTemplate;
