import { Image } from 'primereact/image';
import profile from '../assets/images/shimon.jpg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { DetailsDto } from '@shared/dtos/DetailsDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';

// const prodUrl1 = 'https://photography-server-swart.vercel.app';
const prodUrl2 = 'http://localhost:80';

const instance = axios.create({
  baseURL: `${prodUrl2}/api`, // Base URL for your API
});

export const HomePage = () => {
  const getSummary = async () => {
    const apiUrl = '/details';
    return (await instance.get(apiUrl)).data as BaseResponse<DetailsDto>;
  };

  const { data, isLoading } = useQuery<BaseResponse<DetailsDto>>({
    queryKey: ['summary'],
    queryFn: getSummary,
  });

  return !isLoading ? (
    <div className='card pt-8 px-4 flex justify-center items-center flex-wrap'>
      <Image
        src={profile}
        alt='Profile'
        width='400'
        imageClassName='profile-border'
      />

      <div className='flex-col'>
        <h1 className='text-white m-5'>{data?.data?.summary.title}</h1>
        {data?.data?.summary.description && (
          <p
            className='w-3/6 text-white text-xl m-5'
            dangerouslySetInnerHTML={{
              __html: data?.data?.summary.description,
            }}
          ></p>
        )}
      </div>
    </div>
  ) : null;
};
