import styled from 'styled-components';
import React from 'react';

// 로그인 버튼
const StyledButton = styled.button`
  background: #04005e;
  color: white;
  border: none;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  margin-top: 1rem;
  width: 100%;
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
