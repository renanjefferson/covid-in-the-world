import React from 'react';

import { useCovid } from '../../hooks/Covid';

import { Container } from './styles';

const CountryPicker: React.FC = () => {
  const { statistics, handleCountryChange } = useCovid();

  return (
    <Container>
      <select
        onChange={(e): void => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {statistics.countries
          ? statistics.countries.map((country) => {
              return <option key={country.name}>{country.name}</option>;
            })
          : 'Loading...'}
      </select>
    </Container>
  );
};

export default CountryPicker;
