import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`
const MenuItem = styled(Link)`
  font-family: Natasha;
  color: white;
  width: 100px;
  font-size: 15px;
  text-decoration: none;
  line-height: 15px;
`


const HeaderMenu = ({menu}) => {

    console.log(menu)

    const showMenu = menu.map((i)=><MenuItem href={i.link}>{i.header}</MenuItem>)

    return (
        <MenuContainer>
            {showMenu}
        </MenuContainer>
    );
};

export default HeaderMenu;