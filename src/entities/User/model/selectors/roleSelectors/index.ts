import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../../constants';

import { StateSchema } from '$shared';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => {
  return Boolean(roles?.includes(UserRole.ADMIN));
});

export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER)),
);
