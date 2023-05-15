import React from 'react';
import styled from "styled-components";
import LogoPic from "./logo.svg";
import Link from "next/link";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `

const Logo = styled.div`
    background-image: url("${LogoPic.src}");
    width: 314px;
    height: 36px;
`
const Header = () => {
    return (
        <HeaderContainer>
            <Link href={"/"}><Logo/></Link>
        </HeaderContainer>
    );
};

export default Header;