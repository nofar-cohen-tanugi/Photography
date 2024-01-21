import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import photoLogo from '../assets/images/photoLogo.png';
import { Image } from 'primereact/image';

export const Header = () => {
  const startContent = (
    <React.Fragment>
      <p>Contact</p>
    </React.Fragment>
  );

  const centerContent = (
    <span className='p-input-icon-left'>
      <i className='pi pi-search' />
      <InputText placeholder='Search' />
    </span>
  );

  const endContent = (
    <React.Fragment>
      <p>Gallery</p>
      <Image src={photoLogo} alt='Image' width='40' />
    </React.Fragment>
  );

  return (
    <div className='card'>
      <Toolbar start={startContent} center={centerContent} end={endContent} />
    </div>
  );
};
