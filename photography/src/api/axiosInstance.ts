
import axios from 'axios';

const prodUrl1 = 'https://photography-server-nine.vercel.app';
// const prodUrl2 = 'http://localhost:80';

export const axiosInstance = axios.create({
    baseURL: `${prodUrl1}/api`, // Base URL for your API
});
