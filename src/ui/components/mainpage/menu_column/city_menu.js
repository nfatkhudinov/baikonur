import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import Logo from "./img.png";

const Container = styled.div`
display: flex;
flex-direction: column;
`

const MenuHeaderContainer = styled.div`
display: flex;
flex-direction: row;  
  gap: 10px;
  height: 100px;
  align-items: center;
`
const MenuHeaderLogo = styled.div`
  display: ${props=>props.logo? `initial`:"none"};
  background-image: url(${props=>props.logo? `${props.logo}`:""});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  height: 60px;
  width: 80px;
`

const MenuHeader = styled(Link)`
font-size: 24px;
font-family: Natasha;
  color: white;
  text-decoration: none;
  &:hover{
    color:  #DC2A1E;
    transition: color 0.3s;
  }
`
const MenuItem = styled(Link)`
font-family: Arial;
  width: 90%;
  padding: 0 0 12px 0;
  font-size: 15px;
  font-weight: bold;
  color: #C6C6C6;
  text-decoration: none;
  line-height: 17px; 
  overflow: hidden;
  &:hover{
    color: white;
    margin-left: 5px;
    transition: color 0.5s, margin-left 0.3s;
  }
`

const MenuColumn = (props) => {
    const showItems = props.resp.items.map((i)=><MenuItem key={i.header.toString()} href={i.link}>{i.header}</MenuItem>)
    return (
        <Container>
            <MenuHeaderContainer>
                <MenuHeaderLogo logo={props.logo}/>
                <MenuHeader href={props.resp.link}>{props.resp.header}</MenuHeader>
            </MenuHeaderContainer>
            {showItems}
        </Container>
    );
};

export default MenuColumn;