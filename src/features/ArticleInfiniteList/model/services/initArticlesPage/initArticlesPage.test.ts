import { fetchArticlesList } from '../fetchArticlesList';

import { initArticlesPage } from '.';
import { ListOrderField, ListSortField, TestAsyncThunk } from '$shared';

jest.mock('../fetchArticlesList');
jest.mock('../../slices');

describe('fetchNextArticlesPage.test', () => {
  test('initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesList: {
        search: '',
        sort: ListSortField.CREATED,
        order: ListOrderField.ASC,
        _isInitialized: false,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk(new URLSearchParams());
    const numberOfCalls = 4;

    expect(thunk.dispatch).toBeCalledTimes(numberOfCalls);
  });
  test('don`t initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesList: {
        search: '',
        sort: ListSortField.CREATED,
        order: ListOrderField.ASC,
        _isInitialized: true,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(fetchArticlesList).not.toBeCalled();
  });
});
