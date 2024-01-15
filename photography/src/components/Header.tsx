import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';

export const Header = () => {
  const items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
    },
  ];

  const startContent = (
    <React.Fragment>
      <Button icon='pi pi-plus' className='mr-2' />
      <Button icon='pi pi-print' className='mr-2' />
      <Button icon='pi pi-upload' />
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
      <SplitButton label='Save' model={items} icon='pi pi-check'></SplitButton>
    </React.Fragment>
  );

  return (
    <div className='card'>
      <Toolbar start={startContent} center={centerContent} end={endContent} />
    </div>
  );
};
