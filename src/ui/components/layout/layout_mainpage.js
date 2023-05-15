import React from 'react';
import styled from "styled-components";
import BackgroundImage from "./bg.jpg";
import Header_mainpage from "@/ui/components/header/header_mainpage";



import "@/api/menuresponce";
import CityPic from '@/../public/pics/city.png';
import CosmodromePic from '@/../public/pics/cosmodrome.png';
import "@/api/personsresponce";
import {
    MenuResponceCity,
    MenuResponceCosmodrome,
    MenuResponceGenealogos,
    MenuResponcePersons
} from "@/api/menuresponce";
import MenuColumn from "@/ui/components/mainpage/menu_column/city_menu";
import NewsModule from "@/ui/components/mainpage/news_module/news_module";
import Persons_module from "@/ui/components/mainpage/persons_module/persons_module";
import {PersonsResponce} from "@/api/personsresponce";
import Footer from "@/ui/components/footer/footer";

const FlexContainer = styled.div`
    display:flex;
    justify-content: center;
   background-image: url("${BackgroundImage.src}");
  @media (max-width: 740px){background-image: none;};
    color: white;
  background-position: center 50vh;
    background-repeat: no-repeat;
    background-color: black;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 
   "header header header header"
   "cosmodrome city persons genealogos"
   "news news persons genealogos";
  grid-template-columns: 240px 240px 310px 200px;
  grid-template-rows: 90px 1fr 1fr;
  @media (max-width: 740px){
    display: flex;
    flex-direction: column;
    padding: 0 50px 0 50px;
  ;
  }
`



const HeaderContainer = styled.div`
  grid-area:header; 
  order: 0;
  @media (max-width: 740px){
    margin-bottom: 50px;
  }
`
const CosmodromeContainer = styled.div`grid-area:cosmodrome;  padding: 0 10px 0 10px;  order: 2;`
const CityContainer = styled.div`grid-area:city;   padding: 0 10px 0 10px;  order: 3;`
const PersonsContainer = styled.div`grid-area:persons;   padding: 0 10px 0 10px;  order: 4;`
const GenealogosContainer = styled.div`grid-area:genealogos;  padding: 0 10px 0 10px;  order: 5;`
const NewsContainer = styled.div`grid-area:news;  padding: 0 10px 0 10px; order: 1;`

const Layout_mainpage = () => {
    return (<>
        <FlexContainer>
            <GridContainer>
                <HeaderContainer><Header_mainpage/></HeaderContainer>
                <CosmodromeContainer><MenuColumn resp={MenuResponceCosmodrome} logo={CosmodromePic.src}/></CosmodromeContainer>
                <CityContainer><MenuColumn resp={MenuResponceCity} logo={CityPic.src}/></CityContainer>
                <PersonsContainer><MenuColumn resp={MenuResponcePersons}/><Persons_module resp={PersonsResponce}/></PersonsContainer>
                <GenealogosContainer><MenuColumn resp={MenuResponceGenealogos}/></GenealogosContainer>
                <NewsContainer><NewsModule/></NewsContainer>
            </GridContainer>

        </FlexContainer>
            <Footer/>
</>
    );
};

export default Layout_mainpage;