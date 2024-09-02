import axios from 'axios';

import { loginByUsername } from '.';
import { userActions } from '$entities';
import { TestAsyncThunk } from '$shared';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const dispatchCalledTime = 3;

    const userValue = { userName: '123', id: '1' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ userName: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(dispatchCalledTime);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });
  test('error login', async () => {
    const dispatchCalledTime = 2;

    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ userName: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(dispatchCalledTime);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('LOGIN_ERROR');
  });
});
