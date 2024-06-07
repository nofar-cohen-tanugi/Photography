import { useQuery } from '@tanstack/react-query';
import { PackageDto } from '@shared/dtos/PackageDto';
import { Language } from '@shared/dtos/Language';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'primereact/menuitem';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import { Package } from '../components/Package';
import { axiosInstance } from '../api/axiosInstance';
import i18n from '../i18n';

type PackageTab = 'family' | 'mitzva' | 'couple' | 'children';
type PackageResponse = BaseResponse<Language<PackageDto>[]>;

export const PackagesPage = () => {
  const { t } = useTranslation(['packages', 'category', 'header']);
  const [tab, setTab] = useState<PackageTab>('family');
  const lang = i18n.language as 'he' | 'en';

  const getPackages = async () => {
    const apiUrl = '/packages';
    return (await axiosInstance.get(apiUrl)).data as PackageResponse;
  };

  const { data, isLoading } = useQuery<PackageResponse>({
    queryKey: ['packages'],
    queryFn: getPackages,
  });

  const items: MenuItem[] = [
    { label: t('category:family'), command: () => setTab('family') },
    { label: t('category:couple'), command: () => setTab('couple') },
    { label: t('category:mitzva'), command: () => setTab('mitzva') },
    { label: t('category:children'), command: () => setTab('children') },
  ];

  return (
    <>
      <h1 className='card flex justify-center mt-4 text-2xl py-2'>
        {t('header:packages')}
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
                  <Package packageInfo={item} lang={lang} />
                </div>
              ))
          : null}
      </div>
    </>
  );
};
