import { loginByUsername } from '.';
import { userActions } from '$entities';
import { TestAsyncThunk } from '$shared';

jest.mock('axios');

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const dispatchCalledTime = 3;

    const userValue = { userName: 'admin', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({
      userName: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(dispatchCalledTime);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });
  test('error login', async () => {
    const dispatchCalledTime = 2;

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ userName: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(dispatchCalledTime);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('LOGIN_ERROR');
  });
});
