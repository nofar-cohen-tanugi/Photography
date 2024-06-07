import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { axiosInstance } from '../api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Images } from '../components/Images';

export const GalleryPage = () => {
  const { t } = useTranslation(['gallery', 'header', 'category']);

  const getGallery = async () => {
    const apiUrl = '/gallery';
    return (await axiosInstance.get(apiUrl)).data as BaseResponse<GalleryDto[]>;
  };

  const { data, isLoading } = useQuery<BaseResponse<GalleryDto[]>>({
    queryKey: ['gallery'],
    queryFn: getGallery,
  });

  return (
    <>
      <h1 className='card flex justify-center mt-4 text-2xl py-2'>
        {t('header:gallery')}
      </h1>
      {!isLoading && data?.data ? (
        <div className='py-2 flex flex-col gap-8'>   
         <Images images={data.data} />
        </div>
      ) : (
        <p>...</p>
      )}
    </>
  );
};
