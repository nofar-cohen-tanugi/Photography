
import axios from 'axios';

const prodUrl1 = 'https://photography-server-bzg8y0w40-shimons-projects-9d14bd15.vercel.app';
// const prodUrl2 = 'http://localhost:80';

export const axiosInstance = axios.create({
    baseURL: `${prodUrl1}/api`, // Base URL for your API
});
