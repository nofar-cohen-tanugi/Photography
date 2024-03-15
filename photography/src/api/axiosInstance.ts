
import axios from 'axios';

const prodUrl1 = 'https://photography-server-swart.vercel.app';
const prodUrl2 = 'http://localhost:80';

export const axiosInstance = axios.create({
    baseURL: `${prodUrl2}/api`, // Base URL for your API
});
