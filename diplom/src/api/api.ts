import axios, { AxiosResponse } from "axios";

export const baseURL = "http://localhost:3000/api";

axios.defaults.baseURL = baseURL;

export const apiGet = (url: string): Promise<AxiosResponse> => {
	return axios.get(url);
}

export const apiPost = (
	url: string,
	params?: unknown,
): Promise<AxiosResponse> => {
	return axios.post(url, params).then((res) => res);
};