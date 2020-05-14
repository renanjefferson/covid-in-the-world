import React, { useContext } from 'react';

import { CovidContext } from '../../hooks/Covid';

import { Container } from './styles';

const CountryPicker: React.FC = () => {
  const { countries } = useContext(CovidContext);

  return (
    <Container>
      <select onChange={() => {}}>
        <option value="">Global</option>
        {countries
          ? countries.map((country) => {
              return <option key={country.name}>{country.name}</option>;
            })
          : 'Loading...'}
      </select>
    </Container>
  );
};

export default CountryPicker;
