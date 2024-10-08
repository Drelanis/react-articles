import axios from 'axios';

import { USER_LOCAL_STORAGE_KEY } from '$shared/constants';

export const $api = axios.create({
  baseURL: API,
  headers: {
    Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
  },
});
