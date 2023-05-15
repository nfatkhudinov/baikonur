import React from 'react';
import styled from "styled-components";
import Warning from "@/ui/components/mainpage/persons_module/warning";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";

const PersonModuleContainer = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
`

const Person = styled.div`
width: 100%;
background: linear-gradient(180deg, #00579A 0%, #292C83 100%);
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: row;
 justify-content: flex-start;
  align-items: center;
  gap: 10px;
  &:hover{
    scale:1.1;
    box-shadow: 0px 0px 14px 7px rgba(0, 0, 0, 0.44);
    transition: scale 0.3s, box-shadow 0.3s;
    
  }
`

const PhotoContainer = styled.div`
  width: 71px;
  min-width: 71px;
  height: 71px;
  background-color: white;
  border-radius: 4px;
  background-image: url("${props=>props.photo}");
  background-size: 100% 100%;
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-weight: bold;
`

const Title = styled.div`
    font-size: 10px;
`
const Surname = styled.div`
  font-size: 15px;
`
const Name = styled.div`
  font-size: 15px;
`
const Rank = styled.div`
  font-size: 10px;
`


const PersonsModule = ({resp}) => {
    const ShowPersons = resp.map((i)=>( //ИСПРАВИТЬ RANDOM
        <Person key={randomInt(0,200)}>
            <PhotoContainer photo={i.pic}/>
            <TextContainer>
                <Title>почетный гражданин</Title>
                <Surname>{i.name}</Surname>
                <Name>{i.surname}</Name>
                <Rank>{i.rank}</Rank>
            </TextContainer>
        </Person>

    ))



    return (
        <PersonModuleContainer>
            {ShowPersons}
        <Warning/>
        </PersonModuleContainer>
    );
};

export default PersonsModule;