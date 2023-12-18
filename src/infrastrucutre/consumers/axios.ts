import { ICommonCases } from '@/domain/use-cases/CommonCases';
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.API_URL ?? '',
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": true },
});

export class AxiosConsumer<T> implements ICommonCases<T> {

    async getAll(url: string): Promise<any> {
        return (await axiosInstance.get(url)).data;
    }

    async post(url: string, data: T): Promise<T> {
        return (await axiosInstance.post(url, data)).data;
    }
}

