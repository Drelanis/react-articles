import about from '../locales/en/about.json';
import articles from '../locales/en/articles.json';
import main from '../locales/en/main.json';
import profile from '../locales/en/profile.json';
import translation from '../locales/en/translation.json';

const resources = {
  translation,
  about,
  main,
  profile,
  articles,
} as const;

export default resources;
