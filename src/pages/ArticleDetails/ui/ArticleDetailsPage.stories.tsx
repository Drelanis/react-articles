import {
  Action,
  DeepPartial,
  Dictionary,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  articleDetailsCommentsReducer,
  ArticleDetailsCommentsSchema,
} from '../model';

import ArticleDetailsPage from './ArticleDetailsPage';

import {
  Article,
  ArticleBlockVariant,
  articleDetailsReducer,
  ArticleDetailsSchema,
  ArticleVariant,
  CommentType,
} from '$entities';
import { StateSchema, StoreDecorator } from '$shared';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const comments = [
  {
    id: '1',
    text: 'Comment 1',
    user: {
      id: '1',
      userName: 'admin',
      avatar:
        'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    },
  },
  {
    id: '2',
    text: 'Comment 2',
    user: {
      id: '1',
      userName: 'admin',
      avatar:
        'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    },
  },
];

const entities = comments.reduce((acc, comment) => {
  acc[comment.id] = comment;

  return acc;
}, {} as Dictionary<CommentType>);

const ids = comments.map((comment) => comment.id);

const asyncArticleReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  articleDetails: articleDetailsReducer as Reducer<
    ArticleDetailsSchema | undefined,
    Action<unknown>
  >,
  articleDetailsComments: articleDetailsCommentsReducer as Reducer<
    ArticleDetailsCommentsSchema | undefined,
    Action<unknown>
  >,
};

const article: Article = {
  id: '1',
  user: {
    id: '1',
    userName: 'admin',
  },
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

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: false,
        data: article,
      },
      articleDetailsComments: {
        ids,
        entities,
        isLoading: false,
        error: '',
      },
    },
    asyncArticleReducer,
  ),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator(
    {
      articleDetails: {
        isLoading: true,
        data: article,
      },
      articleDetailsComments: {
        ids,
        entities,
        isLoading: true,
        error: '',
      },
    },
    asyncArticleReducer,
  ),
];
