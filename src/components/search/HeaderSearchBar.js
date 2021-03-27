import React from 'react';
import styled from 'styled-components';
import {Search} from "react-bootstrap-icons";

const SearchBarBody = styled.input`
  width : 100%;
  &:focus{
    outline: none;
  }
  border-radius: 15px;
  border: 3px peru solid;
  padding: 0 15px 3px;
`

const StyledSearch = styled(Search)`
    position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`

export default function HeaderSearchBar(props){
    return(
        <div style={{padding:"5px", position:"relative"}}>
            <SearchBarBody placeholder={"검색어를 입력하세요"}/>
            <StyledSearch/>
        </div>
    )
}