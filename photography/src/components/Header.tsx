import React from 'react';
import photoLogo from '../assets/images/photoLogo.jpeg';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Link } from 'react-router-dom';
import SelectLanguage from './SelectLanguage';

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
      <Menubar
        dir='rtl'
        className='menu-bar p-0 border-0 border-b-2 border-stone-100 bg-transparent flex items-center'
        style={{
          padding: '0.1rem 0.5rem 0.1rem 0.5rem',
        }}
        model={items.map((x) => {
          return {
            ...x,
            className:
              'font-medium text-lg text-white hover:bg-transparent hover:text-orange-400',
          };
        })}
        start={startContent}
        end={endContent}
      />
    </div>
  );
};
