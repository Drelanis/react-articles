import { TranslationChunks } from '$shared';
import { TranslationPagesKeys } from '$shared/configs/i18n';

export type SidebarItemType = {
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: TranslationPagesKeys;
  translation: TranslationChunks;
  authOnly?: boolean;
};
