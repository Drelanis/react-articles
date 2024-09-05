import {
  Action,
  DeepPartial,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Article,
  ArticleBlockVariant,
  articleDetailsReducer,
  ArticleDetailsSchema,
  ArticleVariant,
} from '../model';

import { ArticleDetails } from '.';
import {
  StateSchema,
  StoreDecorator,
  ThemeDecorator,
  ThemeVariants,
} from '$shared';

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
);

const asyncArticleReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  articleDetails: articleDetailsReducer as Reducer<
    ArticleDetailsSchema | undefined,
    Action<unknown>
  >,
};

export const LoadingNormal = Template.bind({});
LoadingNormal.args = {};
LoadingNormal.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: true,
      },
    },
    asyncArticleReducer,
  ),
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: true,
      },
    },
    asyncArticleReducer,
  ),
  ThemeDecorator(ThemeVariants.DARK),
];

export const LoadingOrange = Template.bind({});
LoadingOrange.args = {};
LoadingOrange.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: true,
      },
    },
    asyncArticleReducer,
  ),
  ThemeDecorator(ThemeVariants.ORANGE),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: false,
        error: 'Something went wrong!',
      },
    },
    asyncArticleReducer,
  ),
];

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Що нового у JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleVariant.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockVariant.TEXT,
      title: 'Заголовок цього блоку',
      paragraphs: [
        "Програма, яку за традицією називають 'Hello, world!', дуже проста. Вона виводить кудись фразу 'Hello, world!', або іншу подібну, засобами якоїсь мови.",
        "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільний комп'ютер, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
        'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. , розглянемо приклад, що демонструє роботу з веб-сторінкою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу, але ми зробимо трохи інакше. (наприклад — у VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockVariant.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockVariant.TEXT,
      title: 'Заголовок цього блоку',
      paragraphs: [
        "Програма, яку за традицією називають 'Hello, world!', дуже проста. Вона виводить кудись фразу 'Hello, world!', або іншу подібну, засобами якоїсь мови.",
        'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. , розглянемо приклад, що демонструє роботу з веб-сторінкою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу, але ми зробимо трохи інакше. (наприклад — у VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
      ],
    },
    {
      id: '2',
      type: ArticleBlockVariant.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скріншот сайту',
    },
    {
      id: '3',
      type: ArticleBlockVariant.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: ArticleBlockVariant.TEXT,
      title: 'Заголовок цього блоку',
      paragraphs: [
        "Програма, яку за традицією називають 'Hello, world!', дуже проста. Вона виводить кудись фразу 'Hello, world!', або іншу подібну, засобами якоїсь мови.",
        'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. , розглянемо приклад, що демонструє роботу з веб-сторінкою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу, але ми зробимо трохи інакше. (наприклад — у VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
      ],
    },
    {
      id: '8',
      type: ArticleBlockVariant.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скріншот сайту',
    },
    {
      id: '9',
      type: ArticleBlockVariant.TEXT,
      title: 'Заголовок цього блоку',
      paragraphs: [
        "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільний комп'ютер, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
      ],
    },
  ],
};

export const NormalContent = Template.bind({});
NormalContent.args = {};
NormalContent.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: false,
        data: article,
      },
    },
    asyncArticleReducer,
  ),
];

export const DarkContent = Template.bind({});
DarkContent.args = {};
DarkContent.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: false,
        data: article,
      },
    },
    asyncArticleReducer,
  ),
  ThemeDecorator(ThemeVariants.DARK),
];

export const OrangeContent = Template.bind({});
OrangeContent.args = {};
OrangeContent.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: false,
        data: article,
      },
    },
    asyncArticleReducer,
  ),
  ThemeDecorator(ThemeVariants.ORANGE),
];
