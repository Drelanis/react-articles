import {
  StyleDecorator,
  RouterDecorator,
  ThemeDecorator,
  ThemeVariants,
  TranslationDecorator,
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

addDecorator(TranslationDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeVariants.LIGHT));
addDecorator(RouterDecorator);
