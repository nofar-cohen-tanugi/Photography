import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import photoLogo from '../assets/images/photoLogo.png';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation(['header']);

  const startContent = (
    <React.Fragment>
      <p>{t('contact')}</p>
    </React.Fragment>
  );

  const centerContent = (
    <div className='flex'>
      <p className='mx-2'>{t('packages')}</p>
      <p className='mx-2'>{t('gallery')}</p>
    </div>
  );

  const endContent = (
    <React.Fragment>
      <Image src={photoLogo} alt='Image' width='40' />
    </React.Fragment>
  );

  return (
    <div className='card'>
      <Toolbar start={startContent} center={centerContent} end={endContent} />
    </div>
  );
};
