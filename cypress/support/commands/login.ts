import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/constants/storage';

export const login = (userName: string = 'admin', password: string = '123') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      userName,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
  });
};
