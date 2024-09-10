import { fetchArticlesList } from '../fetchArticlesList';

import { initArticlesPage } from '.';
import { TestAsyncThunk } from '$shared';

jest.mock('../fetchArticlesList');
jest.mock('../../slices');

describe('fetchNextArticlesPage.test', () => {
  test('initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesList: {
        _isInitialized: false,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();
    const numberOfCalls = 2;

    expect(thunk.dispatch).toBeCalledTimes(numberOfCalls);
  });
  test('don`t initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesList: {
        _isInitialized: true,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(fetchArticlesList).not.toBeCalled();
  });
});
