import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';
import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'primereact/image';

export const GalleryCategoryPage = () => {
  const { t } = useTranslation(['category']);
  const { name } = useParams();

  const getGalleryCategory = useCallback(async () => {
    if (name) {
      const apiUrl = `/gallery/${name}`;
      return (await axiosInstance.get(apiUrl)).data as BaseResponse<
        GalleryDto[]
      >;
    }
  }, [name]);

  useEffect(() => {
    if(name) {
    getGalleryCategory();
    }
  }, [name, getGalleryCategory]);

  const { data, isLoading } = useQuery<BaseResponse<GalleryDto[]> | undefined>({
    queryKey: ['gallery:name'],
    queryFn: getGalleryCategory,
  });  

  return (
    <>
      {' '}
      {data && !isLoading && (
        <>
        <h1 className='flex justify-center text-2xl py-2 sm:text-4xl sm:py-6'>{t(data.data?.[0]?.category || '')}</h1>
        <div className='flex justify-center flex-wrap'>
          {data?.data?.map((item) => (
            item.urlIds.map((url, index) => 
            <div className='flex w-full fade-in sm:w-1/3' key={index}>
              <Image
                src={`https://drive.google.com/thumbnail?id=${url}&sz=w1000`}
                alt='Image'
                width='100%'
                style={{ padding: '0.1rem' }}
                loading='lazy'        
              />
            </div>
            )
          ))}
        </div>
        </>
      )}
    </>
  );
};
