import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import photoLogo from '../assets/images/photoLogo.png';
import { Image } from 'primereact/image';

export const Header = () => {
  const startContent = (
    <React.Fragment>
      <p>Contact</p>
    </React.Fragment>
  );

  const centerContent = (
    <div className='flex'>
      <p className='mx-2'>Packages</p>
      <p className='mx-2'>Gallery</p>
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
