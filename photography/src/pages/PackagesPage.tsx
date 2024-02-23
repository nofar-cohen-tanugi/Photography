import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PackageDto } from '@shared/dtos/PackageDto';
import { Language } from '@shared/dtos/Language';
import { BaseResponse } from '@shared/dtos/BaseResponse';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// const prodUrl1 = 'https://photography-server-swart.vercel.app';
const prodUrl2 = 'http://localhost:80';

const instance = axios.create({
  baseURL: `${prodUrl2}/api`, // Base URL for your API
});

export const PackagesPage = () => {
  const { t } = useTranslation(['packages']);
  const lang = i18n.language as 'he' | 'en';
  console.log(lang);

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

  return (
    <>
      <h1 className='flex justify-center mt-4 text-2xl'>{t('packages')}</h1>
      <div>
        {!isLoading
          ? data?.data?.map((item, index) => (
              <>
                <h2 className='flex justify-center'>{item[`${lang}`].title}</h2>
                <div
                  key={index}
                  className='flex flex-wrap justify-center mx-6 gap-3'
                >
                  <div className='w-60 border border-orange rounded-lg'>
                    <p>{item[`${lang}`].basic.images}</p>
                    <p>{item[`${lang}`].basic.hours}</p>
                    <p>{item[`${lang}`].basic.locations}</p>
                    <p>{item[`${lang}`].basic.styling}</p>
                    <p>{item[`${lang}`].basic.price}</p>h
                  </div>

                  <div className='w-60 border border-green rounded-lg'>
                    <p>{item[`${lang}`].premium.images}</p>
                    <p>{item[`${lang}`].premium.hours}</p>
                    <p>{item[`${lang}`].premium.locations}</p>
                    <p>{item[`${lang}`].premium.styling}</p>
                    <p>{item[`${lang}`].premium.price}</p>
                  </div>

                  <div className='w-60 border border-yellow rounded-lg'>
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
