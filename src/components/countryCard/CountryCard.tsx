import { type NavigateFunction, Navigate, useNavigate } from 'react-router-dom';

import './CountryCard.scss';

type CountryCardProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital?: string[];
};

const seeDetails = (navigate: NavigateFunction, state: string) => () => {
  navigate('/country/details', {
    state,
  });
};

const CountryCard = ({
  flag,
  name,
  population,
  capital,
  region,
}: CountryCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img alt={`flag of ${name}`} className="card_img" src={flag} />
      <div className="card_info">
        <h1 className="fs-large fw-bold">{name}</h1>
        <h2 className="fs-small">
          <span className="fw-medium">Population: </span>
          {population}
        </h2>
        <h2 className="fs-small">
          <span className="fw-medium">Region: </span>
          {region}
        </h2>
        {capital !== undefined && (
          <h2 className="fs-small">
            <span className="fw-medium">Capital: </span>
            {capital.join(', ')}
          </h2>
        )}
      </div>
    </div>
  );
};

export { CountryCard };
