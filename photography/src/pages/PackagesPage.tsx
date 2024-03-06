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

const prodUrl1 = 'https://photography-server-swart.vercel.app';
// const prodUrl2 = 'http://localhost:80';

const instance = axios.create({
  baseURL: `${prodUrl1}/api`, // Base URL for your API
});

type PackageTab = 'family' | 'mitzva' | 'couple' | 'children';
type PackageResponse = BaseResponse<Language<PackageDto>[]>;

export const PackagesPage = () => {
  const { t } = useTranslation(['packages', 'photographyType']);
  const lang = i18n.language as 'he' | 'en';
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
    { label: t('photographyType:children'), command: () => setTab('children') }
  ];

  console.log(data?.data);

  return (
    <>
      <h1 className='card flex justify-center mt-4 text-2xl py-2'>
        {t('packages')}
      </h1>
      <div className='card flex justify-center tab-menu py-4 h-auto'>
        <TabMenu model={items}/>
      </div> 
      <div>
        {!isLoading
          ? data?.data
              ?.filter((element) => element.type === tab)
              .map((item, index) => (
                <>
                  <div
                    key={index}
                    className='flex flex-wrap justify-center gap-7 package-wrap my-2'
                  >
                    <div className='w-64 border-2 border-blue rounded-lg px-7 py-5'>
                      <p>{t('basic')}</p>
                      <p className='text-4xl'>{`${item[`${lang}`].basic.price}₪`}</p>
                      <p>{item[`${lang}`].basic.images}</p>
                      <p>{item[`${lang}`].basic.hours}</p>
                      <p>{item[`${lang}`].basic.locations}</p>
                      <p>{item[`${lang}`].basic.styling}</p>
                    </div>

                    <div className='w-64 border-2 border-green rounded-lg px-7 py-5'>
                      <p className=''>{t('premium')}</p>
                      <p className='text-4xl'>{`${item[`${lang}`].premium.price}₪`}</p>
                      <p>{item[`${lang}`].premium.images}</p>
                      <p>{item[`${lang}`].premium.hours}</p>
                      <p>{item[`${lang}`].premium.locations}</p>
                      <p>{item[`${lang}`].premium.styling}</p>
                    </div>

                    <div className='w-64 border-2 border-yellow rounded-lg px-7 py-5'>
                      <p className=''>{t('vip')}</p>
                      <p className='text-4xl'>{`${item[`${lang}`].vip.price}₪`}</p>
                      <p>{item[`${lang}`].vip.images}</p>
                      <p>{item[`${lang}`].vip.hours}</p>
                      <p>{item[`${lang}`].vip.locations}</p>
                      <p>{item[`${lang}`].vip.styling}</p>
                    </div>
                  </div>
                </>
              ))
          : null}
      </div>
    </>
  );
};
