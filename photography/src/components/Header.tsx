import React from 'react';
import photoLogo from '../assets/images/photoLogo.jpeg';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'primereact/menuitem';
import { Link } from 'react-router-dom';
import SelectLanguage from './SelectLanguage';
import { PrimeIcons } from 'primereact/api';
import { MegaMenu } from 'primereact/megamenu';

export const Header = () => {
  const { t } = useTranslation(['header']);

  const startContent = (
    <React.Fragment>
      <Link to='/'>
        <Image
          src={photoLogo}
          alt='Logo'
          width='50'
          height='100%'
          style={{ margin: '0.4rem 0.5rem 0 0.5rem', cursor: 'pointer' }}
        />
      </Link>
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <div className='flex align-items-center gap-2'>
        <SelectLanguage />
      </div>
    </React.Fragment>
  );

  const items: MenuItem[] = [
    {
      label: t('packages'),
      url: '/packages',
    },
    {
      label: t('gallery'),
      url: '/gallery',
    },
    {
      label: t('contact'),
      url: '/gallery',
    },
  ];

  return (
    <div className='card'>
      <MegaMenu
        className='menu-bar p-0 border-0 border-b-2 border-stone-100 bg-transparent flex items-center'
        style={{
          padding: '0.1rem 0.5rem 0.1rem 0.5rem',
        }}
        model={items}
        start={startContent}
        end={endContent}
      />
    </div>
  );
};
