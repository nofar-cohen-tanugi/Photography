import React from 'react';
import photoLogo from '../assets/images/photoLogo.jpeg';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Link } from 'react-router-dom';

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

  const endContent = <React.Fragment></React.Fragment>;

  const items: MenuItem[] = [
    {
      label: t('packages'),
      url: '/packages',
      className:
        'font-medium text-lg text-white hover:bg-transparent hover:text-orange-400',
    },
    {
      label: t('gallery'),
      url: '/gallery',
      className:
        'font-medium	text-lg text-white hover:bg-transparent hover:text-orange-400',
    },
    {
      label: t('contact'),
      url: '/gallery',
      className:
        'font-medium	text-lg text-white hover:bg-transparent hover:text-orange-400',
    },
  ];

  return (
    <div className='card'>
      <Menubar
        className='p-0 border-0 border-b-2 border-stone-100 bg-transparent flex items-center'
        style={{ padding: '0.1rem 0.5rem 0.1rem 0.5rem' }}
        model={items}
        start={startContent}
        end={endContent}
      />
    </div>
  );
};
