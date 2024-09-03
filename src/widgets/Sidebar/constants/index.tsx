import React from 'react';

import { AppRoutes, TranslationChunks } from '$shared';
import AboutIcon from '$shared/assets/icons/about-20-20.svg';
import MainIcon from '$shared/assets/icons/main-20-20.svg';
import ProfileIcon from '$shared/assets/icons/profile-20-20.svg';
import { TranslationPagesKeys } from '$shared/configs/i18n';

export type SidebarItemType = {
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: TranslationPagesKeys;
  translation: TranslationChunks;
  authOnly?: boolean;
};

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: AppRoutes.PROFILE,
    icon: ProfileIcon,
    translation: TranslationChunks.PROFILE,
    text: 'profile',
    authOnly: true,
  },
];
