import type { Country } from './main';

const fetchData = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return (await response.json()) as Country[];
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
};

export { fetchData };
