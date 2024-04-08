import { GalleryDto } from '@shared/dtos/GalleryDto';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';

export const Images = (props: { images: GalleryDto[] }) => {
  const { t } = useTranslation(['gallery', 'header', 'photographyType']);

  return props.images.map((cat, index) => {
    return (
      <div key={index} className='flex items-center justify-center text-center relative'>
        <p className='p-2 text-4xl sm:text-6xl absolute top-[20%] z-10 sm:p-[1rem] category-title'>
          {t(`photographyType:${cat.category}`)}
        </p>
        <div className='flex flex-wrap justify-center items-center'>
          {cat.urlIds.map((item, index) => {
            return (
              <div className='w-1/2 sm:w-80 flex'>
                <Image
                  src={`https://drive.google.com/thumbnail?id=${item}&sz=w1000`}
                  alt='Image'
                  width='100%'
                  style={{ padding: '0.1rem' }}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};