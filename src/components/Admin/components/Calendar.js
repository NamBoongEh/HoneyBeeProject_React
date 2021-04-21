import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import TodoModal from './TodoModal';

const DateBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 0.5px 0 0 4px;
  &:hover {
    cursor: pointer;
  }
`;

const DateBox1 = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 0.5px 0 0 4px;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
const DateBox2 = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 0.5px 0 0 4px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

export default function Calendar(props) {
  const [modalState, setModalState] = useState(false);

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <>
      <Modal
        isOpen={modalState}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalState(false)}
      >
        <TodoModal />
        <button onClick={() => closeModal()}>닫기</button>
      </Modal>

      <div
        className={'container-fluid'}
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: 0,
        }}
      >
        <div style={{ display: 'flex' }}>
          <DateBox1 onClick={() => setModalState(true)}>1</DateBox1>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox2>1</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>1</DateBox1>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox2>1</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>1</DateBox1>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox2>1</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>1</DateBox1>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox2>1</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>1</DateBox1>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox>1</DateBox>
          <DateBox2>1</DateBox2>
        </div>
      </div>
    </>
  );
}
