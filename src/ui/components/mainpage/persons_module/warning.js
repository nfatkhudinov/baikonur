import React from 'react';
import styled from "styled-components";
import WarningPic from "./warning.svg";

const WarningContainer = styled.div`
width: 100%;
  background-color: #DDDDDD;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`
const WarningLogo = styled.div`
background-image: url("${WarningPic.src}");
min-width: 80px;
  height: 80px;
  background-position: center center;
  background-repeat: no-repeat;
`
const WarningText = styled.div`
width: 100%;
  background-color: #2C2C2C;
  border-radius: 10px;
  font-family: Arial;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
`

const Warning = () => {
    return (
        <WarningContainer>
            <WarningLogo/>
            <WarningText>Находящиеся в списках Почетных граждан офицеры, по своему желанию, имеют право разместить здесь информацию о себе, обратившись в редакцию</WarningText>
        </WarningContainer>
    );
};

export default Warning;