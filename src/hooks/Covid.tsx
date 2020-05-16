import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';

import api from '../services/api';

interface CountriesState {
  name: string;
  iso3: string;
}

interface GlobalState {
  confirmed: number;
  recovered: number;
  deaths: number;
  countries?: CountriesState[];
  country: string;
}

interface CovidContextData {
  statistics: GlobalState;
  handleCountryChange(country: string): Promise<void>;
}

const CovidContext = createContext<CovidContextData>({} as CovidContextData);

const CovidProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<GlobalState>({} as GlobalState);

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
        country: 'Global',
      });
    }

    loadGlobalData();
  }, []);

  const handleCountryChange = useCallback(
    async (country) => {
      const response = await api.get(`/api/countries/${country}`);

      setData({
        ...data,
        confirmed: response.data.confirmed.value,
        recovered: response.data.recovered.value,
        deaths: response.data.deaths.value,
        country,
      });
    },
    [data],
  );

  return (
    <CovidContext.Provider
      value={{
        statistics: data,
        handleCountryChange,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};

function useCovid(): CovidContextData {
  const context = useContext(CovidContext);

  if (!context) {
    throw new Error('');
  }

  return context;
}

export { CovidProvider, useCovid };
