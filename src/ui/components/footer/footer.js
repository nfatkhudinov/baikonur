import React from 'react';
import styled from "styled-components";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.png";
import pic5 from "./5.png";
import pic6 from "./6.png";


const FooterContainer = styled.div`
    height: 80px;
    background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  gap: 40px;
`

const LinkToWebsite = styled.img`
    height: 50px;
`

const Footer = () => {
    return (
        <FooterContainer>
            <LinkToWebsite src={pic1.src}/>
            <LinkToWebsite src={pic2.src}/>
            <LinkToWebsite src={pic3.src}/>
            <LinkToWebsite src={pic4.src}/>
            <LinkToWebsite src={pic5.src}/>
            <LinkToWebsite src={pic6.src}/>
        </FooterContainer>
    );
};

export default Footer;