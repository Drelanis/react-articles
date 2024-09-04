import about from '../public/locales/en/about.json';
import main from '../public/locales/en/main.json';
import profile from '../public/locales/en/profile.json';
import translation from '../public/locales/en/translation.json';

const resources = {
  translation,
  about,
  main,
  profile,
} as const;

export default resources;
