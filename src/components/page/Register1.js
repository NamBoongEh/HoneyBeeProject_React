import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Links = styled(Link)`
  float: right;
  font-size: smaller;
  color: slategray;
  text-decoration: underline;
  margin-right: 10px;
  line-height: 50px;
  &:hover{
    color: slategray;
  }
  `

export default function Register1(){
    return(
        <div style={{backgroundColor:"rgb(246,218,66)", padding:"60px"}}>
            <div className={"container"} style={{backgroundColor:"white",padding:"40px 40px 60px 40px", height:"50%", width:"50%", boxShadow:"0 10px 15px 0 rgba(0, 0, 0, 0.5)"}}>
                <h3 style={{fontWeight:"bold"}}>회원가입</h3>
                <h4 style={{fontWeight:"bold", color:"#4B89DC", paddingTop:"40px"}}>필수정보</h4>



                <div style={{paddingTop:"50px"}}>
                    <button style={{backgroundColor:"orange", color:"white", border:"none", fontSize:"18px", padding:"10px 20px 10px 20px", borderRadius:"10px"}}>뒤로가기</button>
                    <button style={{backgroundColor:"orange", color:"white", border:"none", fontSize:"18px", padding:"10px 20px 10px 20px", borderRadius:"10px", float:"right"}}>다음</button>
                </div>
            </div>
        </div>
    )
}
