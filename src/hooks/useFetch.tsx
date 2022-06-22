import { useEffect, useState } from 'react';

type ReturnType<FetchDataType> = {
  data: FetchDataType | undefined;
  error: unknown;
  isLoading: boolean;
  isError: boolean;
};

type ErrorObject = {
  error: unknown;
  isError: boolean;
};

function useFetch<FetchDataType>(
  url: string,
  initialValue: FetchDataType,
  onSuccess?: (data: FetchDataType) => void,
): ReturnType<FetchDataType> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<FetchDataType | undefined>(initialValue);
  const [error, setError] = useState<ErrorObject>({
    error: undefined,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const dataFromApi = (await response.json()) as FetchDataType;

        setData(dataFromApi);
      } catch (error_: unknown) {
        console.error(error_);
        setError({ error: error_, isError: true });

        setData(undefined);
      } finally {
        setIsLoading(false);
        if (data !== undefined) {
          onSuccess?.(data);
        }
      }
    };

    void fetchData();
  }, [data, onSuccess, url]);

  return { data, isLoading, error: error.error, isError: error.isError };
}

export { useFetch };
