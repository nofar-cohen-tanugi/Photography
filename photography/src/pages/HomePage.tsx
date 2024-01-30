import { Image } from 'primereact/image';
import profile from '../assets/images/shimon.jpg';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

type BaseResponse<T> = {
  data: T[];
  message: string;
};

export const HomePage = () => {
  const [data, setData] = useState([{}]);

  const getSummary = useCallback(async () => {
    // Define the API endpoint
    const apiUrl = '/api/summary';

    try {
      const res: BaseResponse<object> = await axios.get(apiUrl);
      setData(res.data);
      console.log(data);
    } catch (error: unknown) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  }, [data]);

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
      <p className='w-3/6 text-white text-x m-5'>{'ffffff'}</p>
    </div>
  );
};
