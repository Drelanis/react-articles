## Project Setup

npm install - installs dependencies  
npm run start:dev or npm run start:dev:vite - starts the server + frontend in dev mode

---

## Scripts

- npm run start - Starts the frontend using webpack dev server
- npm run start:vite - Starts the frontend using Vite
- npm run start:dev - Starts the frontend using webpack dev server + backend
- npm run start:dev:vite - Starts the frontend using Vite + backend
- npm run start:dev:server - Starts the backend server
- npm run build:prod - Builds the project in production mode
- npm run build:dev - Builds the project in development mode (not minified)
- npm run lint:ts - Checks TypeScript files using a linter
- npm run lint:ts:fix - Fixes TypeScript files using a linter
- npm run lint:scss - Checks SCSS files using a style linter
- npm run lint:scss:fix - Fixes SCSS files using a style linter
- npm run test:unit - Runs unit tests with Jest
- npm run test:ui - Runs screenshot tests with Loki
- npm run test:ui:ok - Approves new screenshots
- npm run test:ui:ci - Runs screenshot tests in CI
- npm run test:ui:report - Generates a full report for screenshot tests
- npm run test:ui:json - Generates a JSON report for screenshot tests
- npm run test:ui:html - Generates an HTML report for screenshot tests
- npm run storybook - Starts Storybook
- npm run storybook:build - Builds Storybook
- npm run prepare - Pre-commit hooks
- npm run generate:slice - Script for generating FSD slices

---

## Project Architecture

The project follows the Feature Sliced Design methodology.  
Link to the documentation - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Translations

The project uses the i18next library for handling translations.  
Translation files are stored in `public/locales`.

For convenience, it's recommended to install a plugin for WebStorm/VSCode.  
Documentation for i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Testing

The project uses 4 types of tests:

1. Regular unit tests with Jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with Loki - `npm run test:ui`
4. e2e testing with Cypress - `npm run test:e2e`

More about tests - [Testing Documentation](/docs/TESTS.md)

---

## Linting

##### Running linters:

- `npm run lint:ts` - Check TypeScript files
- `npm run lint:ts:fix` - Fix TypeScript files
- `npm run lint:scss` - Check SCSS files
- `npm run lint:scss:fix` - Fix SCSS files

---

## Storybook

For each component, story cases are described.  
Server requests are mocked using `storybook-addon-mock`.

The story file is created next to the component with the `.stories.tsx` extension.

Start Storybook with the command:

- `npm run storybook`

More about [Storybook](/docs/STORYBOOK.md)

Example:

```typescript
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonSize, ButtonVariant } from '../constants';

import { Button } from '.';
import { ThemeDecorator } from '$shared/configs';
import { ThemeVariants } from '$shared/providers';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
  variant: ButtonVariant.PRIMARY,
};
```

## Project Configuration

For development, the project contains 2 configurations:

1. Webpack - ./config/build
2. Vite - vite.config.ts

Both bundlers are adapted for the main features of the application.

All configurations are stored in /config:

- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

---

## CI Pipeline and Pre-Commit Hooks

The GitHub Actions configuration is located in /.github/workflows.
In CI, all types of tests are run, along with project and storybook builds, and linting.

In pre-commit hooks, the project is checked by linters, with configuration in /.husky.

---

### Working with Data

Interaction with data is handled using Redux Toolkit.
Where possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts).

To connect reducers asynchronously (to avoid pulling them into the main bundle), [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

---

## Entities

- [Article](/src/entities/Article)
- [CommentForm](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Comments](/src/entities/Comments)
- [CountrySelector](/src/entities/Country)
- [CurrencySelector](/src/entities/Currency)
- [Profile](/src/entities/Profile)
- [User](/src/entities/User)

## Features

- [ArticleCommentForm](/src/features/ArticleCommentForm/)
- [ArticleInfiniteList](/src/features/ArticleInfiniteList/)
- [ArticleRecommendations](/src/features/ArticleRecommendations/)
- [Auth](/src/features/Auth/)
- [EditProfile](/src/features/EditProfile/)
- [Logout](/src/features/Logout/)
- [ScrollRestoration](/src/features/ScrollRestoration/)
- [ThemeSwitcher](/src/features/ThemeSwitcher/)

## Widgets

- [ErrorCatcher](/src/widgets/ErrorCatcher/)
- [NavBar](/src/widgets/NavBar/)
- [Page](/src/widgets/Page/)
- [PageLoader](/src/widgets/PageLoader/)
- [Sidebar](/src/widgets/Sidebar/)

## Pages

- [About](/src/pages/About/)
- [AdminPanel](/src/pages/AdminPanel/)
- [ArticleDetails](/src/pages/ArticleDetails/)
- [Articles](/src/pages/Articles/)
- [ForbiddenPage](/src/pages/ForbiddenPage/)
- [Main](/src/pages/Main/)
- [NotFound](/src/pages/NotFound/)
- [Profile](/src/pages/Profile/)
