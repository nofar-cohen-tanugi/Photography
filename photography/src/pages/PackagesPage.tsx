import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PackageDto } from '@shared/dtos/PackageDto';
import { Language } from '@shared/dtos/Language';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { MenuItem } from 'primereact/menuitem';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';

// const prodUrl1 = 'https://photography-server-swart.vercel.app';
const prodUrl2 = 'http://localhost:80';

const instance = axios.create({
  baseURL: `${prodUrl2}/api`, // Base URL for your API
});

type PackageTab = 'family' | 'mitzva' | 'couple' | 'children';

export const PackagesPage = () => {
  const { t } = useTranslation(['packages', 'photographyType']);
  const lang = i18n.language as 'he' | 'en';
  const [tab, setTab] = useState<PackageTab>('family');

  const getPackages = async () => {
    const apiUrl = '/packages';
    return (await instance.get(apiUrl)).data as BaseResponse<
      Language<PackageDto>[]
    >;
  };

  const { data, isLoading } = useQuery<BaseResponse<Language<PackageDto>[]>>({
    queryKey: ['packages'],
    queryFn: getPackages,
  });

  const items: MenuItem[] = [
    { label: t('photographyType:family'), command: () => setTab('family')},
    { label: t('photographyType:couple'), command: () => setTab('couple') },
    { label: t('photographyType:mitzva'), command: () => setTab('mitzva') },
    { label: t('photographyType:children'), command: () => setTab('children') }
  ];

  console.log(data?.data);

  return (
    <>
      <h1 className='card flex justify-center mt-4 text-2xl py-2'>
        {t('packages')}
      </h1>
      <div className='card flex justify-center tab-menu py-4'>
        <TabMenu model={items}/>
      </div> 
      <div>
        {!isLoading
          ? data?.data
              ?.filter((element) => element.en.title === tab)
              .map((item, index) => (
                <>
                  <div
                    key={index}
                    className='flex flex-wrap justify-center mx-6 gap-3'
                  >
                    <div className='w-60 border border-orange rounded-lg p-5'>
                      <p>{item[`${lang}`].basic.images}</p>
                      <p>{item[`${lang}`].basic.hours}</p>
                      <p>{item[`${lang}`].basic.locations}</p>
                      <p>{item[`${lang}`].basic.styling}</p>
                      <p>{item[`${lang}`].basic.price}</p>h
                    </div>

                    <div className='w-60 border border-green rounded-lg p-5'>
                      <p>{item[`${lang}`].premium.images}</p>
                      <p>{item[`${lang}`].premium.hours}</p>
                      <p>{item[`${lang}`].premium.locations}</p>
                      <p>{item[`${lang}`].premium.styling}</p>
                      <p>{item[`${lang}`].premium.price}</p>
                    </div>

                    <div className='w-60 border border-yellow rounded-lg p-5'>
                      <p>{item[`${lang}`].vip.images}</p>
                      <p>{item[`${lang}`].vip.hours}</p>
                      <p>{item[`${lang}`].vip.locations}</p>
                      <p>{item[`${lang}`].vip.styling}</p>
                      <p>{item[`${lang}`].vip.price}</p>
                    </div>
                  </div>
                </>
              ))
          : null}
      </div>
    </>
  );
};
