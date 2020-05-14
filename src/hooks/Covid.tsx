import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';

interface CountriesState {
  name: string;
  iso3: string;
}

interface CovidContextData {
  confirmed: number;
  recovered: number;
  deaths: number;
  countries?: CountriesState[];
}

const CovidContext = createContext<CovidContextData>({} as CovidContextData);

const CovidProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CovidContextData>({} as CovidContextData);

  useEffect(() => {
    async function loadGlobalData(): Promise<void> {
      const [
        {
          data: { confirmed, recovered, deaths },
        },
        {
          data: { countries },
        },
      ] = await Promise.all([api.get('/api'), api.get('/api/countries/')]);

      setData({
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        countries,
      });
    }

    loadGlobalData();
  }, []);
  return (
    <CovidContext.Provider
      value={{
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        countries: data.countries,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};

export { CovidProvider, CovidContext };
