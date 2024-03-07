import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PackageDto } from '@shared/dtos/PackageDto';
import { Language } from '@shared/dtos/Language';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'primereact/menuitem';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import { Package } from '../components/Package';

// const prodUrl1 = 'https://photography-server-swart.vercel.app';
const prodUrl2 = 'http://localhost:80';

const instance = axios.create({
  baseURL: `${prodUrl2}/api`, // Base URL for your API
});

type PackageTab = 'family' | 'mitzva' | 'couple' | 'children';
type PackageResponse = BaseResponse<Language<PackageDto>[]>;

export const PackagesPage = () => {
  const { t } = useTranslation(['packages', 'photographyType']);
  const [tab, setTab] = useState<PackageTab>('family');

  const getPackages = async () => {
    const apiUrl = '/packages';
    return (await instance.get(apiUrl)).data as PackageResponse;
  };

  const { data, isLoading } = useQuery<PackageResponse>({
    queryKey: ['packages'],
    queryFn: getPackages,
  });

  const items: MenuItem[] = [
    { label: t('photographyType:family'), command: () => setTab('family') },
    { label: t('photographyType:couple'), command: () => setTab('couple') },
    { label: t('photographyType:mitzva'), command: () => setTab('mitzva') },
    { label: t('photographyType:children'), command: () => setTab('children') },
  ];

  console.log(data?.data);

  return (
    <>
      <h1 className='card flex justify-center mt-4 text-2xl py-2'>
        {t('packages')}
      </h1>
      <div className='card flex justify-center tab-menu py-4 h-auto'>
        <TabMenu model={items} />
      </div>
      <div>
        {!isLoading
          ? data?.data
              ?.filter((element) => element.type === tab)
              .map((item, index) => (
                <div
                  key={index}
                  className='flex flex-wrap justify-center gap-7 package-wrap my-2'
                >
                  <Package packageInfo={item} />
                </div>
              ))
          : null}
      </div>
    </>
  );
};
