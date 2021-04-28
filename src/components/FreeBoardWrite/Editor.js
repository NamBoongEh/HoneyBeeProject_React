import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Quill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const TextBox = styled.textarea`
  resize: none;
  width: 100%;
  background-color: rgba(246, 218, 66, 0.5);
  border: none;
  &:focus {
    outline: none;
  }
`;

const TitleInput = styled.input`
  height: 4%;
  width: 100%;
  background-color: rgba(246, 218, 66, 0.3);
  border: none;
  &:focus {
    outline: none;
  }
`;

const Line = styled.hr`
  border-color: lightgray;
  border-width: 3px;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const Editor = ({ title, body, onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeBody = (e) => {
    onChangeField({ key: 'body', value: e.target.value });
  };

  return (
    <>
      <TitleInput
        id="title"
        placeholder={'제목을 입력해 주세요.'}
        onChange={onChangeTitle}
        value={title}
      />
      <Line />
      <TextBox
        id="text"
        rows={'30'}
        placeholder={'내용을 입력해 주세요.'}
        onChange={onChangeBody}
      />
    </>
  );
};

export default Editor;
