import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '$shared';

export const getScrollRestoration = (state: StateSchema) =>
  state.scrollRestoration.scroll || {};

export const getScrollRestorationByPath = createSelector(
  getScrollRestoration,
  (_: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
