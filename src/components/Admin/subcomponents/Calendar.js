import React, { useCallback, useState } from 'react';
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
  text-align: center;
`;

const TextModal = styled.form`
  width: 520px;
  height: 150px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  border: 8px solid darkblue;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 30%;
`;

const TextBox = styled.input`
  resize: none;
  width: 450px;
  margin-bottom: 2%;
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
  margin: 0 2%;
`;

const Ok = styled.button`
  background: deepskyblue;
  border: none;
  border-radius: 5px;
  font-size: x-large;
  padding: 3px 0px;
  width: 130px;
  margin: 1% 2%;
`;

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

const Calendar = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(input);
      onChangeInput('');
    },
    [onInsert, input]
  );
  const onChange = (e) => onChangeInput(e.target.value);

  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className={'container-fluid'}
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: 0,
        }}
      >
        <div style={{ display: 'flex' }}>
          <DateBox1 />
          <DateBox />
          <DateBox />
          <DateBox />
          <DateBox onClick={onShow}>1</DateBox>
          <DateBox onClick={onShow}>2</DateBox>
          <DateBox2 onClick={onShow}>3</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1 onClick={onShow}>4</DateBox1>
          <DateBox onClick={onShow}>5</DateBox>
          <DateBox onClick={onShow}>6</DateBox>
          <DateBox onClick={onShow}>7</DateBox>
          <DateBox onClick={onShow}>8</DateBox>
          <DateBox onClick={onShow}>9</DateBox>
          <DateBox2 onClick={onShow}>10</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1 onClick={onShow}>11</DateBox1>
          <DateBox onClick={onShow}>12</DateBox>
          <DateBox onClick={onShow}>13</DateBox>
          <DateBox onClick={onShow}>14</DateBox>
          <DateBox onClick={onShow}>15</DateBox>
          <DateBox onClick={onShow}>16</DateBox>
          <DateBox2 onClick={onShow}>17</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1 onClick={onShow}>18</DateBox1>
          <DateBox onClick={onShow}>19</DateBox>
          <DateBox onClick={onShow}>20</DateBox>
          <DateBox onClick={onShow}>21</DateBox>
          <DateBox onClick={onShow}>22</DateBox>
          <DateBox onClick={onShow}>23</DateBox>
          <DateBox2 onClick={onShow}>24</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1 onClick={onShow}>25</DateBox1>
          <DateBox onClick={onShow}>26</DateBox>
          <DateBox onClick={onShow}>27</DateBox>
          <DateBox onClick={onShow}>28</DateBox>
          <DateBox onClick={onShow}>29</DateBox>
          <DateBox onClick={onShow}>30</DateBox>
          <DateBox2 onClick={onShow}>31</DateBox2>
        </div>
      </div>
      {show && (
        <FullScreen>
          <TextModal onSubmit={onSubmit}>
            <TextBox value={input} onChange={onChange} />
            <br />
            <Cancle onClick={onShow}>닫기</Cancle>
            <Ok type="submit">등록</Ok>
          </TextModal>
        </FullScreen>
      )}
    </>
  );
};

export default Calendar;
