import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectSections } from '../features/sectionSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const sections = useSelector(selectSections);

  return (
    <Container>
      <a>
        <img src='/images/logo.png' alt='midcanLogo' />
      </a>
      <RightMenu>
        <p>MENU</p>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {sections &&
          sections.map((section, index) => (
            <li key={index}>
              <a key={index} href={`#${section.key}`}>
                {section.name}
              </a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
  margin-top: 5px;

  img {
    margin-top: 30px;
    max-width: 18em;
    border-radius: 5px;
    border: 4px solid #28395e;
    @media screen and (max-width: 1930px) {
      max-width: 14em;
    }
    @media screen and (max-width: 900px) {
      max-width: 13em;
    }
    @media screen and (max-width: 550px) {
      max-width: 10em;
      margin-top: 15px;
    }
  }
`;

const RightMenu = styled.div`
  display: inline-flex;
  line-height: 1.35;
  p {
    display: flex;
    flex-direction: l;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    margin-right: 10px;
    color: #d04916;
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 220px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translate(100%)')};
  transition: transform 0.2s;
  background-color: #535259;
  @media screen and (max-width: 900px) {
    width: 150px;
  }

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
      display: flex;
      justify-content: center;
      color: white;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
