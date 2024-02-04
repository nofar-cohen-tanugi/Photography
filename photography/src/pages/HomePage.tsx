import { Image } from 'primereact/image';
import profile from '../assets/images/shimon.jpg';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { DetailsDto } from '@shared/index';

type BaseResponse<T> = {
  data: T[];
  message: string;
};

const instance = axios.create({
  baseURL: 'https://photography-server-swart.vercel.app/api', // Base URL for your API
});

export const HomePage = () => {
  const [data, setData] = useState<DetailsDto['summary']>();

  const getSummary = useCallback(async () => {
    // Define the API endpoint
    const apiUrl = '/details';

    try {
      const res: BaseResponse<DetailsDto> = await instance.get(apiUrl);
      setData(res.data?.[0].summary);
    } catch (error: unknown) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    getSummary();
  }, [getSummary]);

  return (
    <div className='card pt-8 px-4 flex justify-center items-center flex-wrap'>
      <Image
        src={profile}
        alt='Profile'
        width='400'
        imageClassName='profile-border'
      />
      <h1 className='text-white m-5'>{data?.title}</h1>
      <p className='w-3/6 text-white text-xl m-5'>{data?.description}</p>
    </div>
  );
};
