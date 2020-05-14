import React from 'react';

import virusImg from '../../assets/virus.png';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={virusImg} alt="Coronavírus (COVID-19)" width={100} />
    <h1>COVID-19</h1>
  </Container>
);

export default Header;
