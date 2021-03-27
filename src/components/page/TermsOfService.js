import React from 'react';
import {EmojiSmile, x} from "react-bootstrap-icons";
import styled from "styled-components";
import {x} from "react-bootstrap-icons";

const StyledLogin = styled(EmojiSmile)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
 `

export default function TermsOfService(){
    return(
        <>
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.15)", padding:"10%"}}>
                <div className={"container"} style={{backgroundColor:"white",padding:"25px 40px 60px 30px", height:"80%", width:"42%", boxShadow:"0 10px 15px 0 rgba(0, 0, 0, 0.5)",
                borderWidth:"6px", borderColor:"#4B89DC", borderStyle:"solid", lineHeight:"200%"}}>
                    <div style={{fontSize:"18px", fontWeight:"bold"}}>
                        이용약관 동의
                    </div>
                    <div className={"container"} style={{borderWidth:"1px", borderColor:"#DDDDDD", borderStyle:"solid", width:"85%", lineHeight:"300%"}}>
                        안녕하세요
                    </div>
                </div>
            </div>
        </>
    )
}
