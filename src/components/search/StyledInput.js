import React from 'react';
import styled from 'styled-components';

// 로그인 사용하지 않음.

export default function HeaderSearchBar(props) {
  return (
    <div>
      <SearchBarBody placeholder={props.placeholder} />
    </div>
  );
}
