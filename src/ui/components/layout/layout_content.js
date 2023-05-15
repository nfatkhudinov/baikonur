import React from 'react';
import Header_content from "@/ui/components/header/header_content";
import styled from "styled-components";
import {
    MenuResponceCity,
    MenuResponceCosmodrome,
    MenuResponceGenealogos,
    MenuResponcePersons
} from "@/api/menuresponce";
import Navbar from "@/ui/components/navbar/navbar";
import {useRouter} from "next/router";


const Content = styled.div`
font-family: Arial;
  padding: 10px;
`

const FlexContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
height: 100%;`

const FlexHorizontalContainer = styled.div`
display: flex;
  flex-direction: row;
`
const LayoutContent = ({children}) => {
    const pathname  = useRouter();
    let TopMenu = [];
    TopMenu.unshift(
        MenuResponcePersons,
        MenuResponceCosmodrome,
        MenuResponceCity,
        MenuResponceGenealogos,
    )

    console.log("TEST: ", pathname)

const NavbarProps = () => {
    switch (pathname.basePath) {
        case MenuResponceCity.link:
            return MenuResponceCity;
        case MenuResponceCosmodrome.link:
            return MenuResponceCosmodrome;
        case MenuResponceGenealogos.link:
            return MenuResponceGenealogos;
        case MenuResponcePersons.link:
            return MenuResponcePersons;
    }
}




    return (
        <FlexContainer>
            <Header_content resp={TopMenu}/>
            <FlexHorizontalContainer>
                <Navbar items={NavbarProps()}/>
                <Content>{children}</Content>
            </FlexHorizontalContainer>
        </FlexContainer>
    );
};

export default LayoutContent;