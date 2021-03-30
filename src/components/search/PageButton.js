import React from 'react';
import styled from 'styled-components';

const Pagebutton = styled.button`
  color: rgb(48, 27, 1);
  background-color: white;
  font-weight: bold;
  border: solid 1px rgb(48, 27, 1);
  padding: 7px 17px;
  margin: 2% 0.2% 5% 0.2%;
  border-radius: 18px;

  &:hover {
    background-color: rgb(246, 218, 10);
    border: solid 1px white;
  }
`;

export default function PageButton(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Pagebutton>{'<'}</Pagebutton>
      <Pagebutton>1</Pagebutton>
      <Pagebutton>2</Pagebutton>
      <Pagebutton>3</Pagebutton>
      <Pagebutton>4</Pagebutton>
      <Pagebutton>5</Pagebutton>
      <Pagebutton>></Pagebutton>
    </div>
  );
}
