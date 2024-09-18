import { fetchArticlesList } from '../fetchArticlesList';

import { fetchNextArticlesPage } from '.';
import { ListOrderField, ListSortField, TestAsyncThunk } from '$shared';

jest.mock('../fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        search: '',
        sort: ListSortField.CREATED,
        order: ListOrderField.ASC,
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
    // TODO: Fix me
    // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
  test('fetchArticleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        search: '',
        sort: ListSortField.CREATED,
        order: ListOrderField.ASC,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();
    const numberOfCalls = 2;

    expect(thunk.dispatch).toBeCalledTimes(numberOfCalls);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
