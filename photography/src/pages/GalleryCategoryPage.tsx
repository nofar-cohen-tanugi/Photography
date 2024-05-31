import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';
import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { Images } from '../components/Images';
import { useQuery } from '@tanstack/react-query';

export const GalleryCategoryPage = () => {
  const { t } = useTranslation(['gallery', 'header', 'photographyType']);
  const [categoryName, setCategoryName] = useState<string>();
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      setCategoryName(name);
    }
  }, [name]);

  const getGalleryCategory = useCallback(async () => {
    debugger;
    if (categoryName) {
      const apiUrl = `/gallery/${categoryName}`;
      return (await axiosInstance.get(apiUrl)).data as BaseResponse<
        GalleryDto[]
      >;
    }
  }, [categoryName]);

  useEffect(() => {
    if (categoryName) {
      getGalleryCategory();
    }
  }, [categoryName, getGalleryCategory]);

  const { data, isLoading } = useQuery<BaseResponse<GalleryDto[]>>({
    queryKey: ['gallery/name'],
    queryFn: getGalleryCategory,
  });

  return (
    <>
      {' '}
      {isLoading && data && (
        <div className='py-2 flex flex-col gap-8'>
          <Images images={data} />
        </div>
      )}
    </>
  );
};
