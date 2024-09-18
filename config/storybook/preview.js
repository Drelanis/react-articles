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
