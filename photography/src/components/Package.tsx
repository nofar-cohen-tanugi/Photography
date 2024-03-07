import { Language } from '@shared/dtos/Language';
import { PackageDto } from '@shared/dtos/PackageDto';
import { useTranslation } from 'react-i18next';

export const Package = (props: { packageInfo: Language<PackageDto>, lang: 'he' | 'en'}) => {
  const { packageInfo, lang } = props;

  const { t } = useTranslation(['packages']);


  return (
    <>
      <div className='w-64 border-2 border-blue rounded-lg px-7 py-5'>
        <p>{t('basic')}</p>
        <p className='text-4xl'>{`${packageInfo[`${lang}`].basic.price}₪`}</p>
        <p>{packageInfo[`${lang}`].basic.images}</p>
        <p>{packageInfo[`${lang}`].basic.hours}</p>
        <p>{packageInfo[`${lang}`].basic.locations}</p>
        <p>{packageInfo[`${lang}`].basic.styling}</p>
      </div>

      <div className='w-64 border-2 border-green rounded-lg px-7 py-5'>
        <p className=''>{t('premium')}</p>
        <p className='text-4xl'>{`${packageInfo[`${lang}`].premium.price}₪`}</p>
        <p>{packageInfo[`${lang}`].premium.images}</p>
        <p>{packageInfo[`${lang}`].premium.hours}</p>
        <p>{packageInfo[`${lang}`].premium.locations}</p>
        <p>{packageInfo[`${lang}`].premium.styling}</p>
      </div>

      <div className='w-64 border-2 border-yellow rounded-lg px-7 py-5'>
        <p className=''>{t('vip')}</p>
        <p className='text-4xl'>{`${packageInfo[`${lang}`].vip.price}₪`}</p>
        <p>{packageInfo[`${lang}`].vip.images}</p>
        <p>{packageInfo[`${lang}`].vip.hours}</p>
        <p>{packageInfo[`${lang}`].vip.locations}</p>
        <p>{packageInfo[`${lang}`].vip.styling}</p>
      </div>
    </>
  );
};
