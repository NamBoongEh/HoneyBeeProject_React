import React from 'react';
import logo from '../images/logo.PNG';

export default function AdminHeader(props) {
  return (
    <div className={props.className}>
      <div className={'col-3'}>
        <img src={logo} alt={'Honey Bee'} style={{ width: '50%' }} />
      </div>
      <div className={'col-5'} />
      <div className={'col-4'} style={{ textAlign: 'right' }}>
        <button>새알림</button>
        남붕어님, 어서오세요.
        <button>로그아웃</button>
      </div>
    </div>
  );
}
