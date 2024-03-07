import { Image } from 'primereact/image';
import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { axiosInstance } from '../api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export const GalleryPage = () => {

  const getGallery = async () => {
    const apiUrl = '/gallery';
    return (await axiosInstance.get(apiUrl)).data as BaseResponse<GalleryDto[]>;
  };

  const { data, isLoading } = useQuery<BaseResponse<GalleryDto[]>>({
    queryKey: ['gallery'],
    queryFn: getGallery,
  });

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return (
    <>
      {!isLoading ? (
        data?.data?.map((item) => {
          return <Image src={item.url} alt='Image' width='250' preview className='border border-blue'/>;
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
