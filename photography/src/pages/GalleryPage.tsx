import { Image } from 'primereact/image';
import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { axiosInstance } from '../api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const GalleryPage = () => {
  const { t } = useTranslation(['gallery', 'header']);

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
      {!isLoading ? (
        <div className='py-7 px-10 flex flex-wrap'>
          {data?.data?.map((item) => {
            return (
              <Image
                src={`https://drive.google.com/thumbnail?id=${item.urlId}&sz=w1000`}
                alt='Image'
                width='250'
                preview
                style={{padding: '0.1rem'}}
              />
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
