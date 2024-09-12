import about from '../public/locales/en/about.json';
import articles from '../public/locales/en/articles.json';
import main from '../public/locales/en/main.json';
import profile from '../public/locales/en/profile.json';
import translation from '../public/locales/en/translation.json';

const resources = {
  translation,
  about,
  main,
  profile,
  articles,
} as const;

export default resources;
