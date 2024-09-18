import {
  StyleDecorator,
  RouterDecorator,
  ThemeDecorator,
  ThemeVariants,
  TranslationDecorator,
  StoreDecorator,
} from '../../src/shared';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ThemeVariants.LIGHT, color: '#ffffff' },
      { name: 'dark', class: ThemeVariants.DARK, color: '#000000' },
      { name: 'orange', class: ThemeVariants.ORANGE, color: '#ffb005' },
    ],
  },
};

addDecorator(ThemeDecorator(ThemeVariants.LIGHT));
addDecorator(TranslationDecorator);
addDecorator(StyleDecorator);
// ! StoreDecorator must be before RouterDecorator
addDecorator(
  StoreDecorator({
    login: {},
    counter: {},
    user: {},
    profile: {},
  }),
);
addDecorator(RouterDecorator);
