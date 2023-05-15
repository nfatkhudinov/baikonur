import React from 'react';
import styled from "styled-components";
import News0 from "@/ui/components/mainpage/news_module/news_0/news_0";

const NewsContainer = styled.div`
display: flex;
  flex-direction: column;
`

const NewsHeader = styled.h2`
font-family: Natasha;
  font-size: 24px;
`


const NewsModule = () => {
    return (
        <><NewsContainer>
            <NewsHeader>НОВОСТИ</NewsHeader>
                <News0/>
             </NewsContainer>
        </>
    );
};

export default NewsModule;