import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

import { SidebarItemType } from '../types';

import { getUserAuthData } from '$entities';
import { AppRoutes, TranslationChunks } from '$shared';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: AppRoutes.MAIN,
      icon: MainIcon,
      translation: TranslationChunks.ABOUT,
      text: 'aboutUs',
    },
    {
      path: AppRoutes.ABOUT,
      icon: AboutIcon,
      translation: TranslationChunks.MAIN,
      text: 'mainPage',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${AppRoutes.PROFILE}/${userData.id}`,
        icon: ProfileIcon,
        translation: TranslationChunks.PROFILE,
        text: 'profile',
        authOnly: true,
      },
      {
        translation: TranslationChunks.ARTICLES,
        path: AppRoutes.ARTICLES,
        icon: ArticleIcon,
        text: 'articlesPageTitle',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
