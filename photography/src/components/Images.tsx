import { GalleryDto } from '@shared/dtos/GalleryDto';
import { Image } from 'primereact/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Images = (props: { images: GalleryDto[] }) => {
  const { t } = useTranslation(['gallery', 'header', 'category']);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [visibleTitle, setVisibleTitle] = useState(false);

  useEffect(() => {
    if (!visibleTitle) {
      return;
    }
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const observers: IntersectionObserver[] = textRefs.current.map(() => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      }, observerOptions);
    });

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        observers[index].observe(ref);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [visibleTitle]);

  return (
    <>
      {props.images.map((cat, catIndex) => (
        <Link to={`/gallery/${cat.category}`} key={catIndex}>
          <div className='flex items-center justify-center text-center relative'>
            <p
              ref={(el) => (textRefs.current[catIndex] = el)}
              className='p-2 text-4xl sm:text-6xl absolute top-[20%] z-10 sm:p-[1rem] fade-in-up'
            >
              {t(`category:${cat.category}`)}
            </p>
            <div className='flex flex-wrap justify-center items-center'>
              {cat.urlIds.map((item, itemIndex) => (
                <div className='w-1/2 sm:w-80 flex' key={itemIndex}>
                  <Image
                    src={`https://drive.google.com/thumbnail?id=${item}&sz=w1000`}
                    alt='Image'
                    width='100%'
                    style={{ padding: '0.1rem' }}
                    loading='lazy'
                    onLoad={() => setVisibleTitle(true)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
