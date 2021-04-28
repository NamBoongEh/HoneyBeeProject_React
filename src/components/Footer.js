import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Links = styled(Link)`
  color: slategray;
  margin-right: 10px;
  line-height: 50px;
  &:hover {
    text-decoration: none;
    color: slategray;
  }
`;

export default function Footer(props) {
  return (
    <>
      <div style={{ backgroundColor: '#DDDDDD', fontSize: 'smaller' }}>
        <div>
          <Links to={'login'}>회사소개</Links>
          <Links to={'login'}>서비스약관 및 정책</Links>
          <Links to={'login'}>개인정보취급방침</Links>
          <Links to={'login'}>광고문의</Links>
          <Links to={'login'}>투자정보</Links>
          <Links to={'login'}>문의하기</Links>
          <Links to={'login'}>고객센터</Links>
        </div>
        <div
          style={{ color: 'dimgray', fontSize: 'small', lineHeight: '24px' }}
        >
          (주)허니비 주식회사 대표이사 이다현 | 개인정보관리책임자 구리다 |
          사업자등록번호 12345134612435 | 통신판매업 신고번호 제234-165124호
          <br />
          서울특별시 종로구 YMCA 7층 | TEL 02-1234-1234 | FAX 12346-2341235-234
          | Email 92다@naver.com
          <br />
        </div>
        <div
          style={{
            fontSize: 'x-small',
            color: 'dimgray',
            padding: '20px 0 20px',
          }}
        >
          copyright 허니비 어쩌고저쩌고 카피하지마라
        </div>
      </div>
    </>
  );
}
