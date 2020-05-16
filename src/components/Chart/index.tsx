import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useCovid } from '../../hooks/Covid';

import { Container } from './styles';

const Chart: React.FC = () => {
  const { statistics } = useCovid();

  const barData = {
    labels: ['Infectados', 'Recuperados', 'Mortos'],
    datasets: [
      {
        label: 'Pessoas',
        backgroundColor: ['#ff872c', '#12a454', '#e83f5b'],
        borderWidth: 1,
        data: [statistics.confirmed, statistics.recovered, statistics.deaths],
      },
    ],
  };

  return (
    <Container>
      <div>
        <h2>Gráficos Coronavírus (COVID-19)</h2>
        <Bar
          data={barData}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false,
            legend: { display: false },
            title: {
              display: true,
              text: `Estado atual no ${statistics.country}`,
            },
          }}
        />
      </div>
    </Container>
  );
};

export default Chart;
