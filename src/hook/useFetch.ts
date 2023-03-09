import {useCallback, useEffect, useState} from "react";
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

export interface IFetchResponse {
    response: AxiosResponse | null;
    isLoading: boolean;
    error: AxiosError | null;
    doFetch: (options?: AxiosRequestConfig) => void;
}

export const useFetch = (url: string): IFetchResponse => {
    const baseUrl = '';
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState<AxiosError | null>(null);
    const [options, setOptions] = useState<AxiosRequestConfig>({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const doFetch = (options: AxiosRequestConfig = {}) => {
        setOptions(options);
        setIsLoading(true);
    }

    const fetchData = useCallback(async () => {
        try {
            const response = await axios(baseUrl + url, options);
            if (response && response.status >= 200 && response.status < 300) {
                setResponse(response.data);
                setError(null);
            }
        } catch (error: any) {
            setIsLoading(false);
            setError(error.response?.data || error.message)
        }
    }, [url, options])

    useEffect(() => {
        if (isLoading) {
            fetchData()
        }
    }, [fetchData, options])

    return {response, isLoading, error, doFetch};
}