import React from 'react';
import styled from 'styled-components';
import AdminMiniBar from './components/AdminMiniBar';

const Line2 = styled.hr`
  margin: 1% 0;
  background: black;
`;

export default function AdminBoardLeft(props) {
  return (
    <>
      <div className={'container-fluid'} style={{ backgroundColor: 'aqua' }}>
        <AdminMiniBar name={'홈페이지 통계자료'} id={'AdminStatistData'} />
        <div
          style={{
            overflow: 'auto',
            height: '300px',
            marginBottom: '5%',
            backgroundColor: 'white',
          }}
        >
          여기에 통계자료가 들어간다
        </div>
        <AdminMiniBar name={'사내게시판'} id={'AdminBoard'} />
        <div
          style={{
            overflow: 'auto',
            height: '300px',
            marginBottom: '5%',
            backgroundColor: 'white',
          }}
        >
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
          <div>
            <div className={'col-3'} style={{ display: 'inline-block' }}>
              04-19
            </div>
            <div className={'col-9'} style={{ display: 'inline-block' }}>
              테스트
            </div>
            <Line2 />
          </div>
        </div>
      </div>
    </>
  );
}
