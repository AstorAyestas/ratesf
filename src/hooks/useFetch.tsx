import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();
    const [fetching, setFetching] = useState<boolean>();
    const [error, setError] = useState<string| null>('');
    useEffect(() => {
        setFetching(true);
        setTimeout(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    setFetching(false);
                    throw Error('No se encontraron datos para los parametros ingresados.');
                }
                return res.json();
            }
            )
            .then(data => {
                setFetching(false);
                setError(null);
                setData(data);
            }).catch(err => {
                setFetching(false);
                setError(err.message);
            }
            );
         }, 500)
    }, [url]);
    return { data, fetching, error };
}