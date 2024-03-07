import { Image } from 'primereact/image';
import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { axiosInstance } from '../api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const GalleryPage = () => {
  const { t } = useTranslation(['gallery', 'header', 'photographyType']);

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
        <div className='py-2 px-10 flex-col'>
          {data?.data?.map((cat, index) => {
            return (
              <div key={index} className='py-2 text-center'>
                <p className='text-xl py-1'>
                  {t(`photographyType:${cat.objects[0].category}`)}
                </p>
                <div className='flex flex-wrap justify-center items-center'>
                  {cat.objects.map((item) => {
                    return (
                      <Image
                        src={`https://drive.google.com/thumbnail?id=${item.urlId}&sz=w1000`}
                        alt='Image'
                        width='250'
                        preview
                        style={{ padding: '0.1rem' }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
