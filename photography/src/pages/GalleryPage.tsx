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

  console.log(data?.data);

  return (
    <>
      <h1 className='card flex justify-center mt-4 text-2xl py-2'>
        {t('header:gallery')}
      </h1>
      {!isLoading ? (
        <div className='py-7 px-10 flex-col'>
          {data?.data?.map((cat) => {
            return (
              <div className='py-2'>
                <p className='text-xl'>{t(`photographyType:${cat.objects[0].category}`)}</p>
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
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
