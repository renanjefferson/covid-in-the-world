import React, { useContext } from 'react';

import CountUp from 'react-countup';
import { CovidContext } from '../../hooks/Covid';

import { Container } from './styles';

const Cards: React.FC = () => {
  const { confirmed, recovered, deaths } = useContext(CovidContext);
  return (
    <Container>
      <div className="infected">
        <h3>Infectados</h3>
        <h1>
          <CountUp start={0} end={confirmed || 0} duration={2} separator="," />
        </h1>
        <p>Número de infectados pelo covid-19</p>
      </div>
      <div className="recovered">
        <h3>Recuperados</h3>
        <h1>
          <CountUp start={0} end={recovered || 0} duration={2} separator="," />
        </h1>
        <p>Número de recuperados pelo covid-19</p>
      </div>
      <div className="dead">
        <h3>Mortos</h3>
        <h1>
          <CountUp start={0} end={deaths || 0} duration={2} separator="," />
        </h1>
        <p>Número de mortos pelo covid-19</p>
      </div>
    </Container>
  );
};

export default Cards;
