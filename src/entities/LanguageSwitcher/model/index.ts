import { useTranslation } from 'react-i18next';

type Params = {
  isShort: boolean;
};

export const useModel = (params: Params) => {
  const { isShort } = params;

  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  const buttonText = isShort ? t('shortLanguage') : t('language');

  return { toggleLanguage, buttonText };
};
