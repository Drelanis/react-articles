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
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
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
