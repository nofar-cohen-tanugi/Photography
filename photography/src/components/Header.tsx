import React from 'react';
import photoLogo from '../assets/images/photoLogo.png';
import { Image } from 'primereact/image';
import { useTranslation } from 'react-i18next';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

export const Header = () => {
  const { t } = useTranslation(['header']);

  const startContent = (
    <React.Fragment>
      <Image src={photoLogo} alt='Image' width='40' />
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <p>{t('contact')}</p>
    </React.Fragment>
  );

  const items: MenuItem[] = [
    {
      label: t('packages'),
      // icon: 'pi pi-home',
    },
    {
      label: t('gallery'),
      // icon: 'pi pi-star',
    },
  ];

  return (
    <div className='card'>
      <Menubar model={items} start={startContent} end={endContent} />
    </div>
  );
};
