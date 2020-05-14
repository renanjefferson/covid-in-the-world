import React from 'react';

import CountUp from 'react-countup';
import { useCovid } from '../../hooks/Covid';

import { Container } from './styles';

const Cards: React.FC = () => {
  const { statistics } = useCovid();
  return (
    <Container>
      <div className="infected">
        <h3>Infectados</h3>
        <h1>
          <CountUp
            start={0}
            end={statistics.confirmed || 0}
            duration={2}
            separator=","
          />
        </h1>
        <p>Número de infectados pelo covid-19</p>
      </div>
      <div className="recovered">
        <h3>Recuperados</h3>
        <h1>
          <CountUp
            start={0}
            end={statistics.recovered || 0}
            duration={2}
            separator=","
          />
        </h1>
        <p>Número de recuperados pelo covid-19</p>
      </div>
      <div className="dead">
        <h3>Mortos</h3>
        <h1>
          <CountUp
            start={0}
            end={statistics.deaths || 0}
            duration={2}
            separator=","
          />
        </h1>
        <p>Número de mortos pelo covid-19</p>
      </div>
    </Container>
  );
};

export default Cards;
