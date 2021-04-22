import React, { useState } from 'react';
import styled from 'styled-components';

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextModal = styled.div`
  width: 500px;
  height: 165px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  justify-content: center;
  text-align: center;
`;

const TextBox = styled.textarea`
  resize: none;
  width: 450px;
  margin-bottom: 3%;
  &:focus {
    outline: none;
  }
`;

const Cancle = styled.button`
  background: #dddddd;
  border: none;
  border-radius: 5px;
  font-size: x-large;
  padding: 3px 0px;
  width: 130px;
  margin: 1% 2%;
`;

const Ok = styled.button`
  background: orange;
  border: none;
  border-radius: 5px;
  font-size: x-large;
  padding: 3px 0px;
  width: 130px;
  margin: 1% 2%;
`;

const TodoModal = ({ input, todo, onToggle, onRemove }) => {
  const [modal, setModal] = useState(true);

  const onCancel = () => {
    setModal(!modal);
  };

  const onConfirm = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <FullScreen>
          <TextModal>
            <TextBox rows={'2'} />
            <br />
            <Cancle onClick={onCancel}>Cancel</Cancle>
            <Ok onClick={onConfirm}>OK</Ok>
          </TextModal>
        </FullScreen>
      )}
    </>
  );
};

export default TodoModal;
