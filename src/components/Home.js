import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title=''
        anchor='main'
        description=''
        backgroundImg='section1.jpg'
      />
      <Section
        title='About Us'
        anchor='about'
        description='MidCan Imports is located in Winnipeg, Manitoba. We always have Subaru cars for part out: JDM (Japanese Domestic Market) and North American Subaru cars: Engines, Transmissions, Suspension, Body, Interior, etc. Shipping within Canada is available (extra cost).'
        backgroundImg='section2.jpg'
      />
      <Section
        title='Contacts'
        anchor='contacts'
        description='We get Subaru cars for partout arriving every few weeks. We offer fair prices and shipping option. Please feel free to contact us if you are looking for any used parts for your Subaru.'
        backgroundImg='section3.jpg'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
   ;
`;
