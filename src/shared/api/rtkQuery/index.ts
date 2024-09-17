import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { USER_LOCAL_STORAGE_KEY } from '$shared/constants';

export const rtkApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';

      if (token) {
        headers.set('Authorization', token);
      }
    },
  }),
  endpoints: () => ({}),
});
