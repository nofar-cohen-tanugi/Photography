import { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

interface Language {
  name: string;
  code: string;
}

export default function SelectLanguage() {
  const { t } = useTranslation(['header']);

  const [selectedLang, setSelectedLang] = useState<Language | null>(null);
  const languages: Language[] = [
    { name: t('hebrew'), code: 'he' },
    { name: t('english'), code: 'en' },
  ];

  const changeLanguage = (language: 'en' | 'he') => {
    i18n.changeLanguage(language);
    const newDirection = i18n.dir(language);
    document.documentElement.setAttribute('dir', newDirection);
  };

  return (
    <div className='card flex justify-content-center w-7'>
      <Dropdown
        value={selectedLang}
        onChange={(e: DropdownChangeEvent) => {
          changeLanguage(e.value.code);
          setSelectedLang(e.value);
        }}
        options={languages}
        optionLabel='name'
        placeholder={t('selectLanguage')}
        className='h-8 flex items-center dropdown'
      />
    </div>
  );
}
