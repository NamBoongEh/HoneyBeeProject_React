import React from 'react';
import styled from 'styled-components';
import { Envelope } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Box = styled.div`
  background-color: aliceblue;
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
  width: 75px;
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

// **해야할 것 : 현재 이름, 부서 하드코딩 되어있음.
export default function InfoArea(props) {
  return (
    <>
      <Box>
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
