import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { USER_LOCAL_STORAGE_KEY } from '$shared/constants';

export const rtkApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      if (PROJECT === 'storybook') {
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, 'storybookTest');
      }

      const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';

      if (token) {
        headers.set('Authorization', token);
      }
    },
  }),
  endpoints: () => ({}),
});
