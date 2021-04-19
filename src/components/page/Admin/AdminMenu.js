import React from 'react';

export default function AdminMenu(props) {
  return (
    <>
      <div className={'row'}>
        <div className={'col-2'} style={{ backgroundColor: 'yellow' }}>
          - 회원관리
          <br />
          - 모임게시판 관리
          <br />
          - 고객센터
          <br />
          - 문의
          <br />
          - 신고
          <br />
          - 통계분석
          <br />
          - 공지사항
          <br />
          - 관리자 권한 설정
          <br />
        </div>
      </div>
    </>
  );
}
