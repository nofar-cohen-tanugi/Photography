import { Image } from 'primereact/image';
import profile from '../assets/images/shimon.jpg';
import { useQuery } from '@tanstack/react-query';
import { DetailsDto } from '@shared/dtos/DetailsDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { axiosInstance } from '../api/axiosInstance';

export const HomePage = () => {
  const getSummary = async () => {
    const apiUrl = '/details';
    return (await axiosInstance.get(apiUrl)).data as BaseResponse<DetailsDto>;
  };

  const { data, isLoading } = useQuery<BaseResponse<DetailsDto>>({
    queryKey: ['summary'],
    queryFn: getSummary,
  });

  return !isLoading ? (
    <div className='card pt-8 px-7 flex items-center flex-col gap-3 sm:flex-row sm:justify-content'>
      <Image
        src={profile}
        alt='Profile'
        width='90%'
        style={{ display: 'flex', justifyContent: 'center' }}
        imageClassName='profile-border flex justify-content'
      />

      <div className='flex-col w-full gap-2'>
        <h1 className='text-white'>{data?.data?.summary.title}</h1>
        {data?.data?.summary.description && (
          <p
            className='text-white'
            dangerouslySetInnerHTML={{
              __html: data?.data?.summary.description,
            }}
          ></p>
        )}
      </div>
    </div>
  ) : null;
};
