import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width:100%;
  background: #DC2A1E;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 16px;
  font-family: Natasha;
  font-size: 16px;
  justify-content: space-between;
  &:hover{
    scale:1.1;
    box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.44);
    transition: scale 0.3s, box-shadow 0.3s;
`
const LeftSide = styled.div`
width: 40%;
`
const RightSide = styled.div`
width:50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RightSidePart1 = styled.div`
  font-size: 15px;
  text-align: right;
  border-right: 2px solid white;
  padding-right: 8px;
  display: flex;
  align-items: center;
  height: 100%;
`

const RightSidePart2 = styled.div`
  font-size: 35px;
  text-align: left;
  padding-left: 8px;
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 40px;
  text-align: center;
`

const News0 = () => {
    return (
        <Container>
            <LeftSide>ПРИГЛАШЕНИЕ НА ВСТРЕЧУ ВЕТЕРАНОВ КОСМОДРОМА БАЙКОНУР</LeftSide>
            <RightSide>
                <RightSidePart1>КОСМОДРОМУ БАЙКОНУР</RightSidePart1>
                <RightSidePart2>68 лет</RightSidePart2>
            </RightSide>
        </Container>
    );
};

export default News0;