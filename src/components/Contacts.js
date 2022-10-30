import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';

function Contacts() {
  return (
    <Content>
      <li>
        <a href='https://www.instagram.com/midcanimports'>
          <span>
            <AiOutlineInstagram />
          </span>
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/MidCanImports'>
          <span>
            <AiOutlineFacebook />
          </span>
        </a>
      </li>
      <li>
        <a href='mailto: adpleclaire@outlook.com'>
          <span>
            <AiOutlineMail />
          </span>
        </a>
      </li>
    </Content>
  );
}

export default Contacts;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30rem;
  @media screen and (max-width: 550px) {
    margin-top: 15rem;
  }

  li {
    list-style: none;
    font-size: 55px;
    margin-right: 0.5em;
    @media screen and (max-width: 1930px) {
      font-size: 50px;
    }
    @media screen and (max-width: 900px) {
      font-size: 45px;
    }
    @media screen and (max-width: 550px) {
      font-size: 30px;
    }
  }
  span:hover {
    border: 3px solid;
    border-radius: 40px;
    display: flex;
    font-size: 60px;
    background-color: #d04916;
    @media screen and (max-width: 1930px) {
      font-size: 52px;
    }
    @media screen and (max-width: 900px) {
      font-size: 47px;
    }
    @media screen and (max-width: 550px) {
      font-size: 33px;
    }
  }
`;
