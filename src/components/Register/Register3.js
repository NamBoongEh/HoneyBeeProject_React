import Modal from 'react-modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { X } from 'react-bootstrap-icons';

Modal.setAppElement('#root');

const Done = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const ContainerTitle = styled.div`
  background-color: #dddddd;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 0 8px 20px;
`;

const ContainerContent = styled.div`
  border: 1px solid #dddddd;
  width: 100%;
  line-height: 280%;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0 8px 10px;
`;

const Links = styled(Link)`
  text-align-last: right;
  font-size: smaller;
  color: orange;
  text-decoration: underline;
  margin-left: 10px;
  line-height: 50px;
  &:hover {
    color: slategray;
  }
`;

const ButtonX = styled(X)`
  font-size: xx-large;
  display: inline-block;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

const SubModalTitle = styled.div`
  color: #4b89dc;
  font-weight: bold;
  line-height: 280%;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #4b89dc;
  margin: 30px 0;
`;

export default function Register3() {
  const [modalState, setModalState] = useState(false);

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalState}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalState(false)}
        style={{
          left: '50%',
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          content: {
            margin: '0 auto',
            padding: '25px 40px 60px 30px',
            height: '80%',
            width: '50%',
            boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.3)',
            borderWidth: '10px',
            borderColor: 'black',
            borderStyle: 'solid',
            lineHeight: '200%',
          },
        }}
      >
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
          이용약관 동의
          <ButtonX onClick={(e) => closeModal(e)} />
        </div>
        <SubModalTitle>이용약관</SubModalTitle>
        안녕하세요
        <br />
        여기에 글을 쓸겁니다. 이걸 서명하면 당신은 노예가 되는겁니다.
      </Modal>

      <h3 style={{ fontWeight: 'bold' }}>회원가입</h3>
      <SubTitle>이용약관 / 개인정보 수집 및 이용 동의</SubTitle>

      <ContainerTitle className={'container'}>
        <input id={'all'} type={'checkbox'} /> 전체동의
      </ContainerTitle>
      <ContainerContent className={'container'}>
        <div>
          <input type={'checkbox'} /> (필수) 만 14세 이상입니다.
          <br />
          <input id={'check2'} type={'checkbox'} /> (필수) 이용약관 동의
          <Links onClick={() => setModalState(true)}>내용보기</Links>
          <br />
          <label htmlFor={'check3'}>
            <input id={'check3'} type={'checkbox'} />
            (필수) 개인정보 수집 및 이용 동의
          </label>
          <Links onClick={() => setModalState(true)}>내용보기</Links>
          <br />
          <label htmlFor={'check4'}>
            <input id={'check4'} type={'checkbox'} /> (선택) 이메일 수신
          </label>
          <br />
        </div>
        <div style={{ fontSize: '13px', color: 'gray' }}>
          단, 모임 참여와 관련된 정보는 수신동의 여부 관계없이 발송됩니다.
        </div>
      </ContainerContent>
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <Link to="./RegisterDone">
          <Done>회원가입 완료</Done>
        </Link>
        <br />
      </div>
    </div>
  );
}
