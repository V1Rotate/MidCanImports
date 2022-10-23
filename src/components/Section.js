import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Contacts from './Contacts';

function Section({ title, description, backgroundImg, anchor }) {
  const isLastPage = title === 'Contacts';
  const isMiddlePage = title === 'My Projects';

  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1 id={anchor}>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      {isLastPage && <Contacts />}
      <Buttons>
        {!isLastPage && <DownArrow src='../../images/down-arrow.svg' />}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 8vh;
  text-align: center;
  margin-top: 3rem;
  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
  p {
    font-size: 23px;
    margin: 40px;
    max-width: 1020px;
    line-height: 1.4em;
    @media screen and (max-width: 1930px) {
      max-width: 880px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
      max-width: 670px;
      margin-top: 30px;
    }
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
  }
`;

const DownArrow = styled.img`
  height: 50px;
  animation: animateDown infinite 1.5s;
  @media screen and (max-width: 900px) {
    height: 35px;
  }
  @media screen and (max-width: 550px) {
    height: 25px;
  }
`;

const Buttons = styled.div``;
