import { useTranslation } from 'react-i18next';

export const useModel = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return { toggleLanguage, t };
};
