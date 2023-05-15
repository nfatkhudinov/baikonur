import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const NavBarContainer = styled.div`
width: 340px;
height: 500px;
background-color: beige;  
font-family: Arial;
padding: 10px;
`

const Navbar = ({items}) => {
    console.log("ITEMS FROM NAVBAR",items)


    const showMenu= items.items.map((i)=><Link href={i.link}>{i.header}</Link>);

    return (
        <NavBarContainer>
            <h1>{items.header}</h1>
            {showMenu}
        </NavBarContainer>
    );
};

export default Navbar;