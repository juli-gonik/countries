import { useState } from 'react';

import { CountryCard } from '../../components/countryCard/CountryCard';
import { useFetch } from '../../hooks/useFetch';
import './main.scss';

type Country = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  flags: {
    png: string;
  };
  capital: string[];
};

type CountryListProps = {
  countries: Country[];
};

const CountriesList = ({ countries }: CountryListProps) => (
  <>
    {countries.map((country) => (
      <CountryCard
        capital={country.capital}
        flag={country.flags.png}
        key={country.name.common}
        name={country.name.common}
        population={country.population}
        region={country.region}
      />
    ))}
  </>
);

const Main = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const { error, isError, isLoading } = useFetch<Country[]>(
    'https://restcountries.com/v3.1/all',
    [],
    (dataSettled) => {
      setCountries(dataSettled);
    },
  );

  if (isError) {
    console.error(error);
    return <h1>An error has occurred</h1>;
  }

  if (isLoading) {
    return <h1>LOADING BITCH</h1>;
  }

  return (
    <main>
      <CountriesList countries={countries} />
    </main>
  );
};
export type { Country };
export { Main };
