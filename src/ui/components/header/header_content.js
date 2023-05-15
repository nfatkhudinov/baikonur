import React from 'react';
import styled from "styled-components";
import LogoPic from "./logo.svg";
import Header_menu from "@/ui/components/header/header_menu";
import Link from "next/link";

const HeaderContainer = styled.div`
  height: 67px;
  background-color: black;
  width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;`

const Logo = styled(Link)`
  min-width: 314px;
  height: 100%;
  background-image: url("${LogoPic.src}");
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 20px;
`

const HeaderContent = ({resp}) => {
    return (
        <HeaderContainer>
            <Logo href={"/"}/>
            <Header_menu menu={resp}/>
        </HeaderContainer>
    );
};

export default HeaderContent;