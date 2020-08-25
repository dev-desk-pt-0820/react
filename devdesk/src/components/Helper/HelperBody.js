import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import phone from './phone.png';

const MainDiv =styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
`
const SideDiv = styled.div `
display: flex;
flex-direction: column;
margin-top: 150px;
button{
    color:black;
    border-radius:10px;
    background-color: #0066cc;
    height: 50px;
    width: 200px;

    font-size:20px;
    &:hover{
        cursor: pointer;
        background-color: blue;
    }
}
`
const SideDiv2 = styled.div `
display: flex;
height: 500px;
width: 100vh;

img{
    object-fit:scale-down;
    // height: 500px;
}
`

const HelperBody = ()=>{
    return(
        <MainDiv>
        <SideDiv>
        <h1>Making it easier to help students</h1>
        <p>View student help requests and assign tickets to yourself and others</p>
        <Link to={`/helpertickets`}><button>Get Started</button></Link>
        </SideDiv>
        <SideDiv2><img src={phone}></img></SideDiv2>
        </MainDiv>
    )

}
export default HelperBody;