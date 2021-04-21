import React from 'react';
import styled from 'styled-components';
import { Envelope } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Box = styled.div`
  background-color: #eeeeee;
  padding: 2% 3%;
  line-height: 1.8rem;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Department = styled.div`
  font-size: 15px;
`;

const MailBox = styled(NavLink)`
  display: flex;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration-line: none;
    color: black;
    font-weight: bold;
  }
`;

const Mail = styled(Envelope)`
  font-size: 20px;
  margin-right: 5px;
`;
const MailName = styled.div`
  font-size: 15px;
`;

export default function InfoArea(props) {
  return (
    <>
      <Box className={'container-fluid'}>
        <Name>
          남붕어 대리 <br />
        </Name>
        <Department>
          10층 프론트 1팀
          <br />
        </Department>
        <MailBox to={'/mail'}>
          <Mail />
          <MailName>메일함</MailName>
        </MailBox>
      </Box>
    </>
  );
}
